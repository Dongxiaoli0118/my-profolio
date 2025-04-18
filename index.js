

// add one recommendation
function addRecommendation(){
    let nameEle = document.getElementById("name")
    let messageEle = document.getElementById("message")
    let name=(nameEle?.value||"").trim()
    let message=(messageEle?.value||"").trim()
    let ul = document.getElementById("recommendationList")
    if(name==""){
        alert("Please enter name!")
        return false
    }else if(message==""){
        alert("Please enter message!")
        return false
    }else{
        // const result = window.confirm("Confirm add one recommendation?")
        
        let li = document.createElement("li")
        li.setAttribute("class","list-group-item  shadow")
        li.innerHTML = message
        debugger
        ul.appendChild(li)
        nameEle.value=""
        messageEle.value=""
        window.confirm("Thanks for your recommendation!")
    }
}