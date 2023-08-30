//jautājumu kopums
const jautajumi=[
  {
  jautajums: "Kas ir galvenais zemes satelīts?",
  atbilde: "Mēness"},
  {
  jautajums: "Cik ir 2+2?",
  atbilde: "4"},
  {
  jautajums: "Kā sauc lielāko okeānu?",
    atbilde: "Klusais okeāns"
  }
];

//mainīgie js...html
const jautajumsElements=document.getElementById("jautajums");
const atbildeInput=document.getElementById("atbilde");
const iesniegtButton=document.getElementById("iesniegt");

let esosaisJautajumsIndex=0;

//funkcija parādīt jautājumu

function paradiJautajumu(){
  jautajumsElements.textContent=jautajumi[esosaisJautajumsIndex].jautajums;
  
}

//funkcija..pārbaudīt atbildi
function parbauditAtbildi(){
  const lietotajaAtbilde=atbildeInput.value.trim().toLowerCase();
  const pareizaAtbilde=jautajumi[esosaisJautajumsIndex].atbilde.toLowerCase();

  if(lietotajaAtbilde===pareizaAtbilde){
    alert("Pareizi");
  }else{
    alert("Nepareizi");
  }
  esosaisJautajumsIndex++;
  if(esosaisJautajumsIndex<jautajumi.lenght){
    paradiJautajumu();
    atbildeInput.value="";
  }else{
    jautajumsElements.textContent="spēle beigusies";
    atbildeInput.disabled=true;
    iesniegtButton.disabled=true;
  }
}
//klausitajs
paradiJautajumu();
iesniegtButton.addEventListener("click",parbauditAtbildi);