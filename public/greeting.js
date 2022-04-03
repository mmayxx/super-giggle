let elem = document.getElementById('time')
let time = new Date().toLocaleTimeString('en-US', {hour: 'numeric', hour12: true})

morning = "6 AM"
afternoon = "12 PM"
evening = "6 PM"
night = "12 AM"

if (time <= afternoon && time >= morning) {
    elem.innerHTML = ", Good Morning"
} else if (time >= afternoon && time <= evening) {
    elem.innerHTML = ", Good Afternoon"
} else if (time >= evening && time <= night) {
    elem.innerHTML = ", Good Night"
} else {
    elem.innerHTML = ""
}