export const tambahBarangKeKeranjang = (barangYgUdahAda, barangYangDitambah) => {

    const barangExisting = barangYgUdahAda.find(
        belanjaan => belanjaan.id === barangYangDitambah.id
    );

    if (barangExisting) {
        return barangYgUdahAda.map(
            belanjaan => belanjaan.id === barangYangDitambah.id ?
            {...belanjaan, qty: belanjaan.qty + 1} :
            belanjaan
        )
    } 
        
    return [...barangYgUdahAda, {...barangYangDitambah, qty: 1}]
    
    
};