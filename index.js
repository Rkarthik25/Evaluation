// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",Myfun)

var mplarr= JSON.parse(localStorage.getItem("mplobj")) || [];

function Myfun(){
    event.preventDefault();

    var mpllist ={
       matchnum : masaiForm.matchNum.value,
        teama: masaiForm.teamA.value,
       teamb: masaiForm.teamB.value,
        Date : masaiForm.date.value,
       Venue : masaiForm.venue.value,
    }
    
    mplarr.push(mpllist);
    console.log(mplarr);
    localStorage.setItem("schedule" ,JSON.stringify(mplarr))
   


}

