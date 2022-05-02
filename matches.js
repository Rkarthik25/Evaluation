// write js code here corresponding to matches.html
var match=JSON.parse(localStorage.getItem("schedule"));
var matcharr=JSON.parse(localStorage.getItem("favourites")) || [];


match.map(function(ele){

    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=ele.matchnum;
    var td2=document.createElement("td");
    td2.innerText=ele.teama
    var td3=document.createElement("td");
    td3.innerText=ele.teamb
    var td4=document.createElement("td");
    td4.innerText=ele.Date;
    var td5=document.createElement("td");
     td5.innerText=ele.Venue
    var td6=document.createElement("td");
    td6.innerText="Favourites"
    td6.style.color="green";
    td6.style.cursor="pointer"

    td6.addEventListener("click",function(){
        display(ele);
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);

})
// var filter=document.getElementById("filterVenue")
// filter.addEventListener("change",function(){
//     document.querySelector("tbody").innerHTML=""
//     var filterVal=document.getElementById("filterVenue").value 
//     match.filter(a=>a.venues==filterVal)
// .map(ele =>{
//     var tr=document.createElement("tr");
//     var td1=document.createElement("td");
//     td1.innerText=ele.matchnum;
//     var td2=document.createElement("td");
//     td2.innerText=ele.teama
//     var td3=document.createElement("td");
//     td3.innerText=ele.teamb
//     var td4=document.createElement("td");
//     td4.innerText=ele.Date;
//     var td5=document.createElement("td");
//      td5.innerText=ele.Venue
//     var td6=document.createElement("td");
//     td6.innerText="Favourites"
//     td6.style.color="green";
//     td6.style.cursor="pointer"

//     td6.addEventListener("click",function(){
//         display(ele);
//     })
//     tr.append(td1,td2,td3,td4,td5,td6)
//     document.querySelector("tbody").append(tr);

// })})


function display(ele){
    matcharr.push(ele);
    console.log(matcharr)
    localStorage.setItem("favourites", JSON.stringify(matcharr));

}


