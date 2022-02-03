let nama = ["nanda","nan","da","Adnan","alikas"];
let cari = "Adnan";

function CariNama(nama,cari) {
    for (var i = 0; i < nama.length; i++) {
        if (cari == nama [i]) {
            console.log(`${nama[i]} kelas: XI RPL 1`);
        }
    }
}
CariNama(nama,cari);