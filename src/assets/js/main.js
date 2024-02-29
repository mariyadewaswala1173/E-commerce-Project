window.onscroll = function(){
    // console.log(window.pageYOffset);
    if(window.pageYOffset > 99){
        document.querySelector("#my-header").classList.add("sticky");
        // document.querySelector(".menu").classList.add()
    }else{
        document.querySelector("#my-header").classList.remove("sticky");
    }
}
