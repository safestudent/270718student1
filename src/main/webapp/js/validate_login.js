function validate() {
    var name = document.getElementsByName("uname")[0].value;
    var pwd = document.getElementsByName("psw")[0].value;
    if (name == "tester" && pwd == "letmein"  ) {
        window.location = "/tools";
    } else {
    alert("Username or Password is Incorrect");
    }
}