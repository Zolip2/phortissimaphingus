var d = document.getElementById('fart');
d.style.position = "absolute";
var first = new Audio('sound/fort.mp3')
var second = new Audio('sound/second.mp3')
let pont = 0


$('#fart').click(function() {
    let witch = Math.floor(Math.random() * 2)
    if (witch == 0) {
        first.play()
    } else if (witch == 1) {
        second.play()
    }



    coordinate_x = Math.floor(Math.random() * 1201);
    $('#fart').css('left', coordinate_x + 'px')
    coordinate_y = Math.floor(Math.random() * 601)
    $('#fart').css('top', coordinate_y + 'px')
    
    if ($('#fart').click(function() {})) {
        pont = pont + 1
        $('#display').html(pont)
    }

})



