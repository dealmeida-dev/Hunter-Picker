const synth = window.speechSynthesis;


document.getElementById('ging').onclick = runGing
document.getElementById('gon').onclick = runGon
document.getElementById('hisoka').onclick = runHisoka
document.getElementById('killua').onclick = runKillua
document.getElementById('kurapika').onclick = runKurapika
document.getElementById('netero').onclick = runNetero


function runGing(){
  document.querySelector('h2').innerText = 'Ging'
  document.querySelector('#gon').style.display = 'none'
  document.querySelector('#hisoka').style.display = 'none'
  document.querySelector('#killua').style.display = 'none'
  document.querySelector('#kurapika').style.display = 'none'
  document.querySelector('#netero').style.display = 'none'
  document.getElementById('ging').style.width = "100%";
  document.getElementById('ging').style.height = "100%";
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Ging";
  window.speechSynthesis.speak(msg);
}


function runGon(){
  document.querySelector('h2').innerText = 'Gon'
  document.querySelector('#ging').style.display = 'none'
  document.querySelector('#hisoka').style.display = 'none'
  document.querySelector('#killua').style.display = 'none'
  document.querySelector('#kurapika').style.display = 'none'
  document.querySelector('#netero').style.display = 'none'
  document.getElementById('gon').style.width = "100%";
  document.getElementById('gon').style.height = "100%";
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Gon";
  window.speechSynthesis.speak(msg);
  
}


function runHisoka(){
  document.querySelector('h2').innerText = 'Hisoka'
  document.querySelector('#gon').style.display = 'none'
  document.querySelector('#ging').style.display = 'none'
  document.querySelector('#killua').style.display = 'none'
  document.querySelector('#kurapika').style.display = 'none'
  document.querySelector('#netero').style.display = 'none'
  document.getElementById('hisoka').style.width = "100%";
  document.getElementById('hisoka').style.height = "100%";
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Hisoka";
  window.speechSynthesis.speak(msg);
}


function runKillua(){
  document.querySelector('h2').innerText = 'Killua'
  document.querySelector('#gon').style.display = 'none'
  document.querySelector('#hisoka').style.display = 'none'
  document.querySelector('#ging').style.display = 'none'
  document.querySelector('#kurapika').style.display = 'none'
  document.querySelector('#netero').style.display = 'none'
  document.getElementById('killua').style.width = "100%";
  document.getElementById('killua').style.height = "100%";
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Killua";
  window.speechSynthesis.speak(msg);
}


function runKurapika(){
  document.querySelector('h2').innerText = 'Kurapika'
  document.querySelector('#gon').style.display = 'none'
  document.querySelector('#hisoka').style.display = 'none'
  document.querySelector('#killua').style.display = 'none'
  document.querySelector('#ging').style.display = 'none'
  document.querySelector('#netero').style.display = 'none'
  document.getElementById('kurapika').style.width = "100%";
  document.getElementById('kurapika').style.height = "100%";
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Kurapika";
  window.speechSynthesis.speak(msg);
}


function runNetero(){
  document.querySelector('h2').innerText = 'Netero'
  document.querySelector('#gon').style.display = 'none'
  document.querySelector('#hisoka').style.display = 'none'
  document.querySelector('#killua').style.display = 'none'
  document.querySelector('#kurapika').style.display = 'none'
  document.querySelector('#ging').style.display = 'none'
  document.getElementById('netero').style.width = "100%";
  document.getElementById('netero').style.height = "100%";
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Netero";
  window.speechSynthesis.speak(msg);
}

