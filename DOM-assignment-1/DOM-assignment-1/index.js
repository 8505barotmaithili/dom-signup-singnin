// const name=document.getElementById("name")
// name.value="asdfjaslkdfl;asdf"


let container=document.getElementById('signup')

container.addEventListener('submit',(ele)=>{
    ele.preventDefault();


let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let country=document.getElementById('country').value;
let phone=document.getElementById('phone').value;
let password=document.getElementById('password').value;

// console.log(name);
// console.log(email);
// console.log(country);
// console.log(phone);
// console.log(password);

let form={
    name:name,
    email:email,
    country:country,
    phone:phone,
    password:password

}
console.log(form);
});





let  sign=document.getElementById("signin");

sign.addEventListener('submit',(e)=>{
    e.preventDefault();

let name1=document.getElementById("signin-name").value;
let email1=document.getElementById("signin-email").value;
let password1=document.getElementById("signin-password").value;

// console.log(name1);
// console.log(email1);
// console.log(password1);


let second={

   name:name1,
   email:email1,
   password:password1

}
console.log(second);

});
