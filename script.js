var d = document.getElementById('fart');
d.style.position = "absolute";
var first = new Audio('sound/fort.mp3')
var second = new Audio('sound/second.mp3')
let pont = 0
let stage = 1
//1201
//601

$('#blue').click(function() {
    if (pont >= 10) {
        pont = pont - 10
        stage = 2
        $('#fart').css('background-color', 'blue')
        $('#display').html(pont)
        $('#blue').css('visibility', 'hidden')
    }
})

$('#pink').click(function() {
    if (pont >= 50) {
        pont = pont - 50
        stage = 3
        $('#fart').css('background-color', 'pink')
        $('#display').html(pont)
        $('#pink').css('visibility', 'hidden')
    }
})

$('#green').click(function() {
    if (pont >= 200) {
        pont = pont - 200
        stage = 4
        $('#fart').css('background-color', 'green')
        $('#display').html(pont)
        $('#green').css('visibility', 'hidden')
    }
})

$('#purple').click(function() {
    if (pont >=800) {
        pont = pont - 800
        stage = 5
        $('#fart').css('background-color', 'purple')
        $('#display').html(pont)
        $('#purple').css('visibility', 'hidden')
    }
})

$('#brown').click(function() {
    if (pont >=2000) {
        pont = pont - 2000
        stage = 6
        $('#fart').css('background-color', 'brown')
        $('#display').html(pont)
        $('#brown').css('visibility', 'hidden')
    }
})

$('#grey').click(function() {
    if (pont >=10000) {
        pont = pont - 10000
        stage = 7
        $('#fart').css('background-color', 'rgb(61, 61, 61)')
        $('#display').html(pont)
        $('#grey').css('visibility', 'hidden')
    }
})

$('#fart').click(function() {
    if (stage == 1) {
        $('#fart').css('background-color', 'red')
        let coordinate_x = Math.floor(Math.random() * 1201)
        let coordinate_y = Math.floor(Math.random() * 601)
        $('#fart').css('left', coordinate_x + 'px')
        $('#fart').css('top', coordinate_y + 'px')
        pont = pont + 1
        $('#display').html(pont)
        let melyik = Math.floor(Math.random() * 2)
        if (melyik == 0) {
            first.play()
        } else if (melyik == 1) {
            second.play()
        }
    } else if (stage == 2) {
        $('#fart').css('background-color', 'blue')
        let coordinate_x = Math.floor(Math.random() * 1201)
        let coordinate_y = Math.floor(Math.random() * 601)
        $('#fart').css('left', coordinate_x + 'px')
        $('#fart').css('top', coordinate_y + 'px')
        pont = pont + 5
        $('#display').html(pont)
        let melyik = Math.floor(Math.random() * 2)
        if (melyik == 0) {
            first.play()
        } else if (melyik == 1) {
            second.play()
        }
    } else if (stage == 3) {
        $('#fart').css('background-color', 'pink')
        let coordinate_x = Math.floor(Math.random() * 1201)
        let coordinate_y = Math.floor(Math.random() * 601)
        $('#fart').css('left', coordinate_x + 'px')
        $('#fart').css('top', coordinate_y + 'px')
        pont = pont + 10
        $('#display').html(pont)
        let melyik = Math.floor(Math.random() * 2)
        if (melyik == 0) {
            first.play()
        } else if (melyik == 1) {
            second.play()
        }
    } else if (stage == 4) {
        $('#fart').css('background-color', 'green')
        let coordinate_x = Math.floor(Math.random() * 1201)
        let coordinate_y = Math.floor(Math.random() * 601)
        $('#fart').css('left', coordinate_x + 'px')
        $('#fart').css('top', coordinate_y + 'px')
        pont = pont + 20
        $('#display').html(pont)
        let melyik = Math.floor(Math.random() * 2)
        if (melyik == 0) {
            first.play()
        } else if (melyik == 1) {
            second.play()
        }
    } else if (stage == 5) {
        $('#fart').css('background-color', 'purple')
        let coordinate_x = Math.floor(Math.random() * 1201)
        let coordinate_y = Math.floor(Math.random() * 601)
        $('#fart').css('left', coordinate_x + 'px')
        $('#fart').css('top', coordinate_y + 'px')
        pont = pont + 50
        $('#display').html(pont)
        let melyik = Math.floor(Math.random() * 2)
        if (melyik == 0) {
            first.play()
        } else if (melyik == 1) {
            second.play()
        }
    } else if (stage == 6) {
        $('#fart').css('background-color', 'brown')
        let coordinate_x = Math.floor(Math.random() * 1201)
        let coordinate_y = Math.floor(Math.random() * 601)
        $('#fart').css('left', coordinate_x + 'px')
        $('#fart').css('top', coordinate_y + 'px')
        pont = pont + 100
        $('#display').html(pont)
        let melyik = Math.floor(Math.random() * 2)
        if (melyik == 0) {
            first.play()
        } else if (melyik == 1) {
            second.play()
        }
    } else if (stage == 7) {
        $('#fart').css('background-color', 'rgb(61, 61, 61)')
        let coordinate_x = Math.floor(Math.random() * 1201)
        let coordinate_y = Math.floor(Math.random() * 601)
        $('#fart').css('left', coordinate_x + 'px')
        $('#fart').css('top', coordinate_y + 'px')
        pont = pont + 200
        $('#display').html(pont)
        let melyik = Math.floor(Math.random() * 2)
        if (melyik == 0) {
            first.play()
        } else if (melyik == 1) {
            second.play()
        }
    }
})



