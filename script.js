async function foo()
{
  var text=parseInt(document.getElementById('text').value)
  console.log(text);
  if(!isNaN(text))
  {
  var res= await fetch(`https://api-thirukkural.vercel.app/api?num=${text}`)
  var result= await res.json()
  // -------------------------------------TAMIL------------------------------
  var ans=document.getElementById('sec_tam').innerHTML=` Chapter: ${result.chap_tam}`
  var ans=document.getElementById('sect_tam').innerHTML=result.sect_tam
  var ans=document.getElementById('chap').innerHTML=result.chapgrp_tam
  var ans=document.getElementById('line1').innerHTML=`Kural : ${result.line1}`
  var ans=document.getElementById('line2').innerHTML=result.line2
  var ans=document.getElementById('exp').innerHTML=`Meaning : ${result.tam_exp}`

  // -------------------------------------ENGLISH-------------------------

  var ans=document.getElementById('chap_eng').innerHTML=` Chapter: ${result.chap_eng}`
  var ans=document.getElementById('sect_eng').innerHTML=result.sect_eng
  var ans=document.getElementById('chapgrp_eng').innerHTML=result.chapgrp_eng
  var ans=document.getElementById('eng').innerHTML=`Kural : ${result.eng}`
  
  var ans=document.getElementById('eng_exp').innerHTML=`Meaning : ${result.eng_exp}`


  }
   else{
        alert("Enter only Number")
  }
}
