let kurs = {
        BYN: 1,
        USD: 0.39,
        CNY: 2.46,
        EUR: 0.34,
        RUB: 29.52
    };



document.getElementById("konvert").addEventListener("click", function () {
    document.getElementById("perevod").innerHTML = "";
    let inputField = document.querySelector("input").value;
    let valutName = document.querySelector("select").value;
    let valut = ["BYN", "USD", "CNY", "EUR", "RUB"];
    valut.splice(valut.indexOf(valutName), 1);
    valut.forEach(function (element) {
        let div = document.createElement("label");
        div.innerHTML = `${Math.round(inputField * perevod(kurs[valutName], kurs[element]*1000))/1000}  ${(element)}`;
        document.getElementById("perevod").append(div);
    });
});

function perevod(a, b) {
    return  (+b / +a);
}

///*
document.getElementById("view").addEventListener("click", function () { 
document.getElementById("view").remove();
let div = document.createElement("input");
div.setAttribute("type", "date");
div.setAttribute("id", "data");
let   now= Date.now();
let  r=now-14*24*60*60*1000;
div.setAttribute("value", `${new Date(now).toISOString().substring(0,10)}`);
div.setAttribute("min", `${new Date(r).toISOString().substring(0,10)}`);
div.setAttribute("max", `${new Date(Date.now()).toISOString().substring(0,10)}`);
document.getElementById("dataChoise").append(div);

let div1 = document.createElement("button");
div1.id="but";
div1.innerText="Окей"; 
document.getElementById("dataChoise").append(div1);

let  arr=[];
arr=sozd(r,now);
console.log(arr);

document.getElementById("but").addEventListener("click", function () {
    showKurs(arr);       
});
});


function showKurs(arr){
    let  dat=document.getElementById("data").value;
    let  kurs=arr.find((a)=>{if(a.dat==dat)return 1; return false;})
    let  st=`Значения валют за ${kurs.dat}:<br>`;
    for (let  key in kurs){
      if(key=="dat") continue;
      if(key=="CNY"||key=="RUB")st+="1 BYN = "+kurs[key]+"  "+key+"<br>";
      else st+="1 "+key+"=   "+kurs[key]+" BYN "+"<br>"
    }
    document.getElementById("otvet").innerHTML=`<p>${st}</p>`
}
function sozd(r,s){
  let  arr=[];
    for(let  i=r; i<=s;i+=24*60*60*1000){
        let  dannie = {
            dat: new Date(i).toISOString().substring(0,10),
            USD: Math.round(((Math.random() * 0.2*1/kurs.USD) + 0.9*1/kurs.USD)*1000)/1000,
            CNY: Math.round(((Math.random() * 0.2*kurs.CNY) + 0.9*kurs.CNY)*1000)/1000,
            EUR: Math.round(((Math.random() * 0.2*1/kurs.EUR) + 0.9*1/kurs.EUR)*1000)/1000,
            RUB: Math.round(((Math.random() * 0.2*kurs.RUB) + 0.9*kurs.RUB)*1000)/1000
        };
        arr.push(dannie);
    }
   return arr;
}

