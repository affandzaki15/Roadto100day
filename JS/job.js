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
const inputJob = document.querySelector("#job-input")
const filter = document.querySelector("#job-filter")
const hasil = document.querySelector("#job-hasil")
const statistik = document.querySelector("#job-stats")

function tampilkanApplications(apply){
    hasil.innerHTML = "";
  
  apply.forEach(data => {
    let tombolStatus = "";
  
    if (data.status === "applied"){
      tombolStatus = `<button onclick="ubahStatus(${data.id})">Interview</button>`;
  
    } else if (data.status === "interview"){
      tombolStatus = `<button onclick="ubahStatus(${data.id})">Rejected</button>`
    } 
    hasil.innerHTML += `
        <div>
            <h2>${data.company}</h2>
            <p>${data.position}</p>
            <p> status: ${data.status}</p>
           
            ${tombolStatus}

            <button onClick = "hapusApplication(${data.id})">
            Hapus
            </button>

        </div>
        `
    })
}
tampilkanApplications(applications)

function ubahStatus(id){
  const statusJob = applications.find(data => data.id === id)
  if (statusJob.status === "applied"){
    statusJob.status = "interview"
  } else if(statusJob.status === "interview"){
    statusJob.status = "rejected"
  }

  tampilkanApplications(applications)
  tampilkanStatistik()
}

function hapusApplication(id){
  const hapusJob = applications.findIndex(data => data.id === id)
  applications.splice(hapusJob, 1)

  tampilkanApplications(applications)
  tampilkanStatistik()
}

form.addEventListener("submit", (event)=>{
  event.preventDefault();

  const text = inputCompany.value
  const text2 = inputJob.value;

    const applyBaru = {
      id: Date.now(),
      company: text,
      position: text2,
      status: "applied"
    }

    applications.push(applyBaru)
    tampilkanApplications(applications)
    tampilkanStatistik()

    inputCompany.value = "",
    inputJob.value = ""

})

function filterApplication(status){

  let hasil;
  if (status === "all"){
      hasil = applications
  } else {
    hasil = applications.filter(data => data.status ===status)
  }

  tampilkanApplications(applications)
}

function tampilkanStatistik(){
  const total = applications.length
  const applied = applications.filter(data => data.status === "applied").length
  const interview = applications.filter(data => data.status === "interview").length
  const rejected = applications.filter(data => data.status === "rejected").length

  statistik.innerHTML = `
    <div>
      <p>Total job: ${total}</p>
      <p>Total Apply: ${applied}</p>
      <p>Total Interview: ${interview}</p>
      <p>Total Rejected: ${rejected}</p>

    </div>
  `

}