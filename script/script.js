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
        document.getElementsByClassName("pr-title")[0].innerHTML = "Monthly price";
        document.getElementsByClassName("pr-mob")[0].innerHTML = "Rs 100"
        document.getElementsByClassName("pr-basic")[0].innerHTML = "Rs 200"
        document.getElementsByClassName("pr-standard")[0].innerHTML = "Rs 500"
        document.getElementsByClassName("pr-premium")[0].innerHTML = "Rs 700"
    }
    else{
        document.getElementsByClassName("pr-title")[0].innerHTML = "Yearly price";
        document.getElementsByClassName("pr-mob")[0].innerHTML = "Rs 1000"
        document.getElementsByClassName("pr-basic")[0].innerHTML = "Rs 2000"
        document.getElementsByClassName("pr-standard")[0].innerHTML = "Rs 5000"
        document.getElementsByClassName("pr-premium")[0].innerHTML = "Rs 7000"
    }
})

