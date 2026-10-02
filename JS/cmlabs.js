const formCM = document.querySelector("#form")
const hasilCM = document.querySelector("#hasil")



formCM.addEventListener("submit", (event)=>{
    event.preventDefault()

    const firstName = document.querySelector("#first").value
    const lastName = document.querySelector("#last").value
    const phone = document.querySelector("#phone").value
    const address = document.querySelector("#address").value
    
    hasilCM.innerHTML = `
    <div>
    <p>Hi, my name is ${firstName} ${lastName}</p>
    <p>Phone Number: ${phone}</p>
    <p>Address: ${address}</p>
    </div>
    
    `

})