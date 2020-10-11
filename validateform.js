function validation1() {
    var age = document.myform.age.value;
    var mob = document.myform.mob.value;
    var errorMessage = "";
    if (age<0 || age>150) {
        errorMessage="Age should be between 0 and 150";
        alert(errorMessage);
        return false;
    }

    if (mob.length!=10) {
        alert("Enter correct mobile number");
        return false;
    }
}
