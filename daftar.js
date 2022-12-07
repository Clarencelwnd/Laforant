let form = document.querySelector('#form')

form.addEventListener('submit', function(event){
event.preventDefault()

let error = document.querySelector('#error')
let message = ""

let nama, kata_sandi, email, kebangsaan
nama = document.querySelector('#nama')
email = document.querySelector('#email')
kata_sandi = document.querySelector('#kata_sandi')
kebangsaan = document.querySelector('#kebangsaan')

if(nama.value == ""){
    message = "Mohon isi nama!"
}

else if(!isAlphabet(nama.value)){
    message = "Nama harus berupa huruf!"
}

 else if(email.value == ""){
    message = "Mohon isi email!"
} else if(!email.value.endsWith(".com")){
    message = "Email harus diakhiri dengan .com"
}else if(!email.value.includes("a")){
    message = "Email harus memiliki @"
}else if(email.value.indexOf("@")!=email.value.lastIndexOf("@")){
    message = "Email harus memiliki hanya satu @"
}else if(email.value.includes("@.") || email.value.includes(".@") || email.value.includes("..")){
    message = "Format email tidak boleh ada @./.@/.."
}
else if(kata_sandi.value == ""){
    message = "Mohon isi kata sandi!"
}else if(kata_sandi.value.length < 8){
    message = "kata sandi harus terdiri dari minimal 8 karakter!"
}
else if(kebangsaan.value == ""){
    message = "Mohon isi kebangsaan!"
}
else if(!persetujuan.checked){
    message = "mohon beri centang!"
}
error.textContent = message
})

function isAlphabet(string){
    string = string.toLowerCase()
    let valid = true 
    Array.from(string).forEach((c) => {
        if(c < 'a' || c > 'z') valid = false
        if(c == ' ') valid = true
    })
    return valid
}
