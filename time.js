//DOM ELEMENTS
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus =document.getElementById('focus');
      
//Time
function calltime() {
    let today = new Date,
        hour =today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
//    am/ pm
    const ampm = hour >= 12 ? 'PM' : 'AM';
    
//    12 hour clock
    hour = hour % 12 || 12;
//    output time
    time.innerHTML = `${hour}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)}${ampm}`;
    
    setTimeout(calltime, 1000);
    
}
// zero 
function addzero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
;};
//change background
function setback() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12){
        document.body.style.backgroundImage = "url('./morning.jpg')";
        greeting.textContent= 'Good Morning,';
        document.body.style.color = "rgba(255, 255, 255, 0.9)";
        document.getElementById('name').style.color = 'rgba(33, 31, 31, 0.92)';
        
    } else if (hour < 18){
        document.body.style.backgroundImage = "url('./afternoon2.jpg')";
        greeting.textContent = 'Good Afternoon,';
        document.body.style.color = "rgb(0, 0, 0)";
        document.getElementById('name').style.color = 'rgb(255, 255, 255)';
        
        
    } else {
        document.body.style.backgroundImage = "url('./evening.jpg')";
        greeting.textContent = 'Good Evening,';
         document.body.style.color = "rgba(255, 255, 255, 0.9)";
        document.getElementById('name').style.color = 'rgba(255, 249, 249, 0.92)';
        
    }
};
// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = 'Enter Focus';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}


focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//calling functions
setback();
calltime();
getFocus();
