function transformUppercase(_val){
    return _val.toUpperCase();
}

//DOM event listener
let elNamaPengguna = doucument.getElement.getElementbyId("namaPengguna")
elNamaPengguna.addEventListener("keyup",functiom(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})

function checkPassword(){
    let elKataLaluan = doucument.getElementById("kataLaluan")
    let pass_val = elKataLaluan.value

    if(pass_val.length > 5){
        alert("Password check...OK!")
    } else {
        alert("Password too short!")
    }       
}

//traditional DOM event handler
let elKL = document.getElementById("kataLaluan")
elKL.onblur = checkPassword
