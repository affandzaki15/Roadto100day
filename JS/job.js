const applications = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Developer",
    status: "applied",
  },
  {
    id: 2,
    company: "Tokopedia",
    position: "Software Engineer",
    status: "interview",
  },
  {
    id: 3,
    company: "Shopee",
    position: "Frontend Developer",
    status: "rejected",
  },
  {
    id: 4,
    company: "Apple",
    position: "iOS Developer",
    status: "applied",
  },
];

const form = document.querySelector("#job-form")
const inputCompany = document.querySelector("#company-input")
const filter = document.querySelector("#job-filter")
const hasil = document.querySelector("#job-hasil")
const statistik = document.querySelector("#job-stats")

function tampilkanApplications(apply){
    hasil.innerHTML = "";
    apply.forEach(data => {
        hasil.innerHTML += `
        <div>
            <h2>${data.company}</h2>
            <p>${data.position}</p>
            <p> status: ${data.status}</p>
           
        </div>
        `
    })
}

tampilkanApplications(applications)