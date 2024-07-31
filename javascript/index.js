import "./projets";
const skills=document.querySelector(".skills");
const popup=document.querySelector(".popup");
const ErrorDisplay=document.querySelector(".invaliablemessage");
const butt=document.querySelectorAll(".button-projects");
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const img3=document.querySelector(".img3");
const img4=document.querySelector(".img4");
const img5=document.querySelector(".img5");
const img6=document.querySelector(".img6");
const img7=document.querySelector(".img7");
const img8=document.querySelector(".img8");
const img9=document.querySelector(".img9");
const formSend=document.querySelector(".formSend")
const form=document.querySelector("#formUser");
const formSendInterface =document.querySelector(".formSendInterface")
const inputName =document.querySelector(".inputName")
const inputEmail =document.querySelector(".inputEmail")
const inputLastname =document.querySelector(".inputLastname")
const inputMessage =document.querySelector(".inputMessage")
const inputNumber =document.querySelector(".inputNumber")
const sendMessage=document.querySelector(".sendMessage")
const closeMessage=document.querySelector(".closeMessage")

let animationFormSender=true;
let compteure=0
butt.forEach((button)=>{
  button.addEventListener("click",()=>{
     alert(`Sorry that's not avilable yet  \u{1F607} \u{1F607}`)
  })
})
window.addEventListener("scroll",(event)=>{
   if(scrollY>600){
        popup.classList.add("pop");
      }else{
        popup.classList.remove("pop")
      }  
    if(scrollY>990){
      img1.classList.add("pop")
      img2.classList.add("pop")
      img3.classList.add("pop")
      img4.classList.add("pop")
      img5.classList.add("pop")
      img6.classList.add("pop")
      img7.classList.add("pop")
      img8.classList.add("pop")
      img9.classList.add("pop")
    }else{
      img1.classList.remove("pop")
      img2.classList.remove("pop")
      img3.classList.remove("pop")
      img4.classList.remove("pop")
      img5.classList.remove("pop")
      img6.classList.remove("pop")
      img7.classList.remove("pop")
      img8.classList.remove("pop")
      img9.classList.remove("pop")
       } 

})
  form.addEventListener("submit",(event) => {
    event.preventDefault();
    fectchDataUser()
    if(animationFormSender){
      formSend.classList.toggle("send");
      animationFormSender=false;
    }

  animationFormSender=!animationFormSender;
  sendMessage.classList.add("display")
  closeMessage.addEventListener("click",()=>{
    sendMessage.classList.remove("display")
  })

      event.target.reset()
      setTimeout(() => {
        location.reload();
    }, 5000);
});
const fectchDataUser=async ()=>{
  const formData = new FormData(form);
  const entries = formData.entries();
  const obj = Object.fromEntries(entries);

    let response = await fetch("https://api-server-jd60.onrender.com/api/data", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(obj)
    });
  }
