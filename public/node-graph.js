const counter_interval = setInterval(() => {
    node()
}, 1000);
function node() {
    $_safe_area = document.getElementById('trend-depiction').clientHeight
    safe_area  = 195
    max = (safe_area)
    node_1_position = Math.floor(Math.random() * max)
    node_2_position = Math.floor(Math.random() * max)
    node_3_position = Math.floor(Math.random() * max)
    node_4_position = Math.floor(Math.random() * max) // leading ->>

    // nodes [
        document.getElementById('node1').cy.baseVal.value = `${node_1_position}`
        document.getElementById('node2').cy.baseVal.value = `${node_2_position}`
        document.getElementById('node3').cy.baseVal.value = `${node_3_position}`
        document.getElementById('node4').cy.baseVal.value = `${node_4_position}`
        // node ]

    // stock fluctuation result [ --> (ref to latest change in price)
        node_4_position >= (max / 2) ?
            [
            document.getElementById('link1').style.stroke = 'red', // [ - downtrend]
            document.getElementById('link2').style.stroke = `red`,
            document.getElementById('link3').style.stroke = `red`,
            // node bg col here
            ]
        :
            [
            document.getElementById('link1').style.stroke = '#4affab', // [ + uptrend]
            document.getElementById('link2').style.stroke = `#4affab`,
            document.getElementById('link3').style.stroke = `#4affab`,
            // node bg col here
            ]
        // s.f.r ]

    // link1
    document.getElementById('link1').y1.baseVal.value = `${node_1_position}`
    document.getElementById('link1').y2.baseVal.value = `${node_2_position}`

    // link2
    document.getElementById('link2').y1.baseVal.value = `${node_2_position}`
    document.getElementById('link2').y2.baseVal.value = `${node_3_position}`

    // link3
    document.getElementById('link3').y1.baseVal.value = `${node_3_position}`
    document.getElementById('link3').y2.baseVal.value = `${node_4_position}`
    
}