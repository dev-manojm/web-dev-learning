function validationForm(){
    name=document.myform.username.value
    password=document.myform.password.value
if (name==null|| name==""){
    alert("name cant be empty")

}else if(password==null||password==""||password.length()<6){
    alert("password length should be gretaer than 6")
}
}