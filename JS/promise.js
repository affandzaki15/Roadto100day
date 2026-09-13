const janji = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Data blum diterima");
    }, 2000);
});

janji
    .then((hasil) => {
    console.log(hasil);
})
    .catch((error) =>{
        console.log(error)
    });

// promise dengan kondisi
const umur = 2;

const cekUmur = new Promise((resolve, reject) =>{
    if(umur >=18){
        resolve("boleh masuk")
    } else{
        reject("belum cukup umur")
    }

})

cekUmur
    .then((hasil) =>{
        console.log(hasil)
    })
    .catch((error)=>{
        console.log(error)
    })