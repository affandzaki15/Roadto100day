const janji = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Data blum diterima");
  }, 2000);
});

janji
  .then((hasil) => {
    console.log(hasil);
  })
  .catch((error) => {
    console.log(error);
  });

// promise dengan kondisi
const umur = 2;

const cekUmur = new Promise((resolve, reject) => {
  if (umur >= 18) {
    resolve("boleh masuk");
  } else {
    reject("belum cukup umur");
  }
});

cekUmur
  .then((hasil) => {
    console.log(hasil);
  })
  .catch((error) => {
    console.log(error);
  });

const ambilData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const berhasil = false;

    if (berhasil) {
      resolve("data berhasil");
    } else {
      reject("data gagal");
    }
  }, 2000);
});

ambilData
  .then((hasil) => {
    console.log(hasil);
  })
  .catch((error) => {
    console.log(error);
  });

const datagw = new Promise((resolve, reject) => {
  setTimeout(() => {
    const berhasil = true;
    if (berhasil) {
      resolve([
        {
          id: 1,
          nama: "PS",
          harga: 2000000,
        },
        {
          id: 2,
          nama: "Xbox",
          harga: 3000000,
        },
        {
          id: 3,
          nama: "Nintendo",
          harga: 2500000,
        },
      ]);
    } else {
      reject("data gagal dikirim");
    }
  }, 4000);
});

datagw
  .then((produk) => {
      produk.forEach((data) => { 
          console.log(data.nama);
      })
      const box = produk.find(data => data.nama === "Xbox")
      console.log(box);
     const total = produk.reduce((acc, val) =>{
         return acc += val.harga
        }, 0)
        console.log(total)
        console.log(produk)
    })
    
const akuaku = new Promise((resolve, reject) => {
    setTimeout(() => {
        const berhasil = false;

        if (berhasil) {
            resolve("Data berhasil diterima");
        } else {
            reject("Data gagal diterima");
        }
    }, 2000);
});

async function ambilDats() {
   try{
    const hasil = await akuaku;
    console.log(hasil)
   }
   catch (error){
    console.log(error)
   }
}

ambilDats();


const pees = new Promise((resolve, reject) =>{
    
    setTimeout(()=>{

        const berhasil = true;
        
            if(berhasil){
                resolve({
                    id: 1,
                    nama: "PS5",
                    harga: 8000000
                })
            } else{
                reject("data lemot")
            }
    },3000)
})

async function njokokData(){
    try{
        const slur = await pees;
        console.log(slur)
        console.log(slur.nama)
        console.log(slur.harga)
    }
    catch(error) {
        console.log(error)
    }
}
njokokData()


async function ambilDataa() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        data.forEach((user)=>{
            console.log(user.name)
        })

    } catch (error) {
        console.log(error);
    }
}

ambilDataa();