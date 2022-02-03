const NamaArray = [
    {Nama:`nanda`, Kelas: `XI RPL1`},
    {Nama:`sinta`, Kelas: `XI RPL2`},
    {Nama:`nopi`, Kelas: `XI RPL3`},
    {Nama:`dinar`, Kelas: `XI RPL1`},
    {Nama:`triza`, Kelas: `XI RPL1`},
    {Nama:`anisa`, Kelas: `XI RPL2`},
    {Nama:`dayon`, Kelas: `XI RPL3`},
    {Nama:`gilang`, Kelas: `XI RPL3`},
    {Nama:`wite`, Kelas: `XI RPL4`},
    {Nama:`megas`, Kelas: `XI RPL5`},
]


function NamaFilter() {
    const filter = NamaArray.filter (item => {
        return item.Kelas == `XI RPL 1`;
    });
    console.log(filter);
}
NamaFilter();