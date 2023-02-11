function validateForm(){
    var firstName;
    firstName = document.forms["contact-form"]["text1"].value;
    if(firstName == "" )
    {
        alert("لطفا نام خود را وارد کنید");
        return false;
    }
    var lastname;
    lastname = document.forms["contact-form"]["text2"].value;
    if(lastname == "" )
    {
        alert("لطفا نام خانوادگی خود را وارد کنید");
        return false;
    }
    var birthday;
    birthday = document.forms["contact-form"]["birthday"].value;
    if(birthday == "" )
    {
        alert("لطفا تاریخ تولد خود را وارد کنید");
        return false;
    }
    var city;
    city = document.forms["contact-form"]["city"].value;
    if(city == "" )
    {
        alert("لطفا استان خود را انتخاب کنید");
        return false;
    }
	var telephone;
    telephone = document.forms["contact-form"]["tel"].value;
    if(telephone == "" )
    {
	    alert("لطفا شماره تلفن خود را وارد کنید");
        return false;
	}
	var subject;
	subject = document.forms["contact-form"]["subject"].value;
	if(subject == "" )
	{
		alert("لطفا موضوع خود را وارد کنید");
		return false;
	}
	var gender;
	gender = document.forms["contact-form"]["gender"].value;
	if(gender == "" )
	{
		alert("لطفا جنسیت خود را انتخاب کنید");
		return false;
	}
}
function showImg(img){
    var bigImg= document.getElementById("bigImg");
    bigImg.src= img.src;
    bigImg.parentElement.style.display="block";
}