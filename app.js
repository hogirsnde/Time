const minutes=document.querySelector(".min");
const second=document.querySelector(".sec");
const mili=document.querySelector(".mili");

const st=document.querySelector(".st");
const sp=document.querySelector(".sp");
const re=document.querySelector(".re");
x=0;
y=0;
z=0;
st.addEventListener("click",function(){
var cl=setInterval(function(){
mili.innerHTML="0"+x;
x+=1;
if(x>=10){
    x=0;
    y+=1;
}
if(y>=60){
    var t=z;
    z+=1;
}
if(t<z){
    x=0;
    y=0;
}
second.innerHTML="0"+y;
if(y>=10){
    second.innerHTML=y;

}
minutes.innerHTML="0"+z;
if(z>=10){
    minutes.innerHTML=z;
}
},100);    

sp.addEventListener("click",function(){
    clearInterval(cl);
})

re.addEventListener("click",function(){
minutes.innerHTML="00";
second.innerHTML="00";
mili.innerHTML="00";

})
})
