const body = document.body
const login = document.querySelector('.login')
const link = document.querySelector('#href')

function klik() {
    const error = document.querySelector('.error')
    error.innerHTML = "" 

    if (login.value == "") {
        console.log("Tidak Valid")

        const newText = document.createElement("p")
        newText.textContent = "Kotak Input Anda Tidak Boleh Kosong!"
        newText.style.color = "red"
        newText.style.fontSize = "small"
        newText.style.marginTop = "2px"
        newText.style.display = "inline"
        error.append(newText)

    } else if (login.value == "1") {
        console.log("woi")
        link.href = 'new/index.html'
        
    } else if (login.value == "0") {
        window.close(); 
        
    } else {
        const newText = document.createElement("p")
        newText.textContent = "Angka Yang Anda Masukan Tidak Valid!"
        newText.style.color = "red"
        newText.style.fontSize = "small"
        newText.style.marginTop = "2px"
        newText.style.display = "inline"
        error.append(newText)
    }
}