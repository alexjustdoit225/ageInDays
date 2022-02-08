function ageInDays(){
    let age = prompt('How old are you fam?');
    let result = age * 365; 
    // only display results 
    let answer = document.createTextNode('You are ' + result + ' days old my guy.');
    console.log('hello'); 
    let h2 = document.getElementById('container-result');
    h2.appendChild(answer);  
  }
  
  