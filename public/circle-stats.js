let circular_bar = document.getElementById('circular-stats')

let value = 0
const circular_interval = setInterval(() => {
    value++
    circular_bar.style.background = `conic-gradient(#60D5A9 ${value}deg, #b8ffd4 ${value}deg ${value * 2}deg, #212121 ${value * 2}deg)`
    if (value === 100) {
        clearInterval(circular_interval)
    }
}, 1);