function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert('Anda Berhasil Login');
        window.location="succes.html"
        return false;
    }
    else if (username == "" || password=="") {
    alert("username / password tidak boleh koosong")
    return false;
    }
    else{
        alert("username / password yang anda inputkan salah")
    }
}