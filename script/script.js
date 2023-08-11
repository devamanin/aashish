document.getElementsByClassName("mobile")[0].addEventListener("click", function(){
    document.getElementsByClassName("mobile")[0].classList = "rec mobile";
    document.getElementsByClassName("basic")[0].classList = "basic option-cn"
    document.getElementsByClassName("standard")[0].classList = "standard option-cn"
    document.getElementsByClassName("premium")[0].classList = "premium option-cn"


    let ls = document.querySelectorAll("tbody tr");
    console.log(ls);
    // for (let i = 0; i< ls.length; i++){
    //     console.log(ls[i]);
    // }
    // let trlist = ls.document.getElementsByTagName("tr")[0];
})
document.getElementsByClassName("basic")[0].addEventListener("click", function(){
    document.getElementsByClassName("basic")[0].classList = "rec basic";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("standard")[0].classList = "standard option-cn"
    document.getElementsByClassName("premium")[0].classList = "premium option-cn"
})
document.getElementsByClassName("standard")[0].addEventListener("click", function(){
    document.getElementsByClassName("standard")[0].classList = "rec standard";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("basic")[0].classList = "basic option-cn"
    document.getElementsByClassName("premium")[0].classList = "premium option-cn"
})
document.getElementsByClassName("premium")[0].addEventListener("click", function(){
    document.getElementsByClassName("premium")[0].classList = "rec premium";
    document.getElementsByClassName("mobile")[0].classList = "mobile option-cn"
    document.getElementsByClassName("standard")[0].classList = "standard option-cn"
    document.getElementsByClassName("basic")[0].classList = "basic option-cn"
})


document.getElementById("color_mode").addEventListener("click", function(){
    let checkbox = document.getElementById("color_mode");
    if (checkbox.checked == false){
        console.log("true");
    }
    else{
        console.log("asd")
    }
})