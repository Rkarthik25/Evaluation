// write js code here corresponding to favourites.html
var arr=JSON.parse(localStorage.getItem("favourites"));
var fav= JSON.parse(localStorage.getItem("favourites")) ;
arr.map(function(ele,i){

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
    td6.innerText="Delete"
    td6.style.cursor="pointer"
   

    td6.addEventListener("click",function(){
       event.target.parentNode.remove()
      fav.splice(i,i+1)
      localStorage.setItem("favourites",JSON.stringify(fav))
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);

})






