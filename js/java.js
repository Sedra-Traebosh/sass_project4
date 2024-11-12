
var cars=["imgs/buy2.jpg","imgs/buy5.jpg","imgs/buy6.jpg"];

function changeit(i){

  if(i==0){
     document.getElementsByClassName("imgg")[0].setAttribute("src",cars[0]);
     document.getElementsByClassName("i1")[0].classList.add("active");
     document.getElementsByClassName("i1")[1].classList.remove("active");
     document.getElementsByClassName("i1")[2].classList.remove("active");

  }else if (i==1) {
     document.getElementsByClassName("imgg")[0].setAttribute("src",cars[1]);
     document.getElementsByClassName("i1")[0].classList.remove("active");
     document.getElementsByClassName("i1")[1].classList.add("active");
     document.getElementsByClassName("i1")[2].classList.remove("active");
  }else{
     document.getElementsByClassName("imgg")[0].setAttribute("src",cars[2]);
     document.getElementsByClassName("i1")[0].classList.remove("active");
     document.getElementsByClassName("i1")[1].classList.remove("active");
     document.getElementsByClassName("i1")[2].classList.add("active");
  }


}




// let list=document.getElementsByClassName("list")[0];
//
// list.addEventListener("click", ()=>{
//   let list2=document.getElementsByClassName("list2");
//   list2.style.color="#8e7cad";
//
//
// });




function list(i){

  if(i==0){
    document.getElementsByClassName("list1")[0];
     document.getElementsByClassName("list2")[0].style.color="#8e7cad";
     document.getElementsByClassName("list2")[1].style.color="#fff";
     document.getElementsByClassName("list2")[2].style.color="#fff";
     document.getElementsByClassName("list2")[3].style.color="#fff";


  }
  else if (i==1){
    document.getElementsByClassName("list1")[0];
     document.getElementsByClassName("list2")[0].style.color="#fff";
     document.getElementsByClassName("list2")[1].style.color="#8e7cad";
     document.getElementsByClassName("list2")[2].style.color="#fff";
     document.getElementsByClassName("list2")[3].style.color="#fff";

  }
  else if (i==2){
    document.getElementsByClassName("list1")[0];
     document.getElementsByClassName("list2")[0].style.color="#fff";
     document.getElementsByClassName("list2")[1].style.color="#fff";
     document.getElementsByClassName("list2")[2].style.color="#8e7cad";
     document.getElementsByClassName("list2")[3].style.color="#fff";

  }else{
    document.getElementsByClassName("list1")[0];
     document.getElementsByClassName("list2")[0].style.color="#fff";
     document.getElementsByClassName("list2")[1].style.color="#fff";
     document.getElementsByClassName("list2")[2].style.color="#fff";
     document.getElementsByClassName("list2")[3].style.color="#8e7cad";

  }
};











//
// let nav=document.getElementsByClassName("the-toggler")[0];
//
// nav.addEventListener("click", ()=>{
//   let nav2=document.getElementsByClassName("navbar");
//   if(nav2.style.height ==='0px'){
//     nav2.style.height='150px';
//     nav2.window.onscroll=
//   }else{
//     nav2.style.height='0px';
//   }
//
// });



// let nav=document.getElementsByClassName("the-toggler")[0];
//
// nav.addEventListener("scroll",()=>{
//    let nav2=document.getElementsByClassName("navbar");
//     nav2.style.height='150px';
//  })



// document.addEventListener("the-toggler",
// function(){
//   const nav =document.querySelector("navbar");
// //     nav.style.disply ='block';
//    nav2.classList.toggle('active');
// });


// $(function () {
//   $('.the-toggler').on('click' ,function () {
//    $('.navbar').slideToggle();
//  });
// });
