import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDNzG5gz1HdfK3Z61LSWQoD6ZSqKxLCTUM",
    authDomain: "k-store-c91b4.firebaseapp.com",
    projectId: "k-store-c91b4",
    storageBucket: "k-store-c91b4.appspot.com",
    messagingSenderId: "323953290756",
    appId: "1:323953290756:web:e778ae389fa126ca9b0f51",
    measurementId: "G-CYSFJMFHZY"
};

export const bikinDocProfilUser = async (authnyaUser, dataTambahan) => {
    if(!authnyaUser) return;

    const referensiUser = firestore.doc(`users/${authnyaUser.uid}`);
    const snapShot = await referensiUser.get();

    if (!snapShot.exists) {

        const { displayName, email } = authnyaUser;
        const kapanDibuat = new Date();

        try {
            await referensiUser.set({
                displayName,
                email,
                kapanDibuat,
                ...dataTambahan
            })
        } catch (erornyaApa) {
            console.log('Error bro! Gagal buat user baru!', erornyaApa.message);
        };

    }

    return referensiUser;
};

// export const bikinInvetoriKoleksi = async ( barangKoleksiToko, dataBarang ) => {
//     if(!barangKoleksiToko) return;

//     const referensiKoleksi = firestore.doc(`collection/${barangKoleksiToko.uid}`);
//     const snapShot = await referensiKoleksi.get();

//     if (!snapShot.exists) {

//         const { id, name, imageUrl, price } = barangKoleksiToko;
//         const kapanDimasukin = new Date();

//         try {
//             await referensiKoleksi.set({
//                 id,
//                 name,
//                 imageUrl,
//                 price,
//                 kapanDimasukin,
//                 ...dataBarang
//             })
//         } catch (erornyaApa) {
//             console.log('Error bro! Gagal buat user baru!', erornyaApa.message);
//         };

//     }

//     return referensiKoleksi;
// };

export const tambahKoleksiDanDokumen = async ( keyKoleksi, objekYangDitambah ) => {
    
    const referensiKoleksi = firestore.collection(keyKoleksi);
    
    const batch = firestore.batch();
    objekYangDitambah.forEach(objek => {
        const dokumenReferensiBaru = referensiKoleksi.doc();
        batch.set(dokumenReferensiBaru, objek)
    });

    return await batch.commit()
    
};

export const convertSnapshopKoleksiKeMap = collectionsSnapshot => {
    
    const rubahFileKoleksi = collectionsSnapshot.docs.map( docSnapshot => {
        const { title, items } =  docSnapshot.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            items
        }
    });

    return rubahFileKoleksi.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } )
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;