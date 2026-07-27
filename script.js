
let caseNumber = 0;


function addRow(){

let table=document.getElementById("rows");


let row=document.createElement("tr");


row.innerHTML=`

<td><input type="date"></td>

<td><input></td>

<td><input></td>

<td><input></td>

<td>
<input type="time" class="start">
</td>


<td>
<input type="time" class="end" onchange="calculateTime(this)">
</td>


<td class="minutes">
0
</td>


<td><input></td>


<td><input></td>


<td>
<select onchange="updateErrors()">
<option>No Error</option>
<option>Error</option>
</select>
</td>


<td><input></td>


<td><input></td>


<td><input></td>

`;



table.appendChild(row);

updateTotals();

}



function calculateTime(element){


let row=element.closest("tr");


let start=row.querySelector(".start").value;

let end=row.querySelector(".end").value;


if(start && end){


let startTime=new Date("1970-01-01 "+start);

let endTime=new Date("1970-01-01 "+end);


let minutes=(endTime-startTime)/60000;


row.querySelector(".minutes").innerHTML=
Math.round(minutes);


}


calculateTotalTime();

}



function updateTotals(){


let rows=document.querySelectorAll("#rows tr");


document.getElementById("caseCount").innerHTML=
rows.length;


updateErrors();

calculateTotalTime();

}



function updateErrors(){


let errors=0;


document.querySelectorAll("select").forEach(x=>{


if(x.value=="Error")
errors++;

});


document.getElementById("errors").innerHTML=errors;


let cases=document.querySelectorAll("#rows tr").length;


let rate=cases?
(errors/cases*100).toFixed(2):
0;


document.getElementById("errorRate").innerHTML=
rate+"%";


}



function calculateTotalTime(){


let total=0;


document.querySelectorAll(".minutes").forEach(x=>{

total+=Number(x.innerHTML);

});


document.getElementById("totalTime").innerHTML=
(total/60).toFixed(2);


}


