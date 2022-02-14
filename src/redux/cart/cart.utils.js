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

export const kurangiBarangDariKeranjang = (barangYgUdahAda, barangYangDikurang) => {
    const barangExisting = barangYgUdahAda.find(
        belanjaan => belanjaan.id === barangYangDikurang.id
    )

    if (barangExisting.qty === 1) {
        return barangYgUdahAda.filter(barang => barang.id !== barangYangDikurang )
    }

    return barangYgUdahAda.map(
        barang =>
        barang.id === barangYangDikurang.id ?
        { 
            ...barang,
            qty: barangYangDikurang.qty - 1 
        } : barang
    );
}