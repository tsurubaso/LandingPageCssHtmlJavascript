//https://www.youtube.com/watch?v=JPLCl2LlZk4
//This tutorial

const cursor = document.getElementById('cursor');
document.addEventListener("mousemove", function(e){
    //console.log(e.clientX+" "+e.clientY);
    cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
})

