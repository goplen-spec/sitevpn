$( document ).ready(function() {



    // $('#hours_slider').on('input',function() {
    //    $('#hours_count').val($(this).val() + ' мин.')
    //    let price = ($(this).val() * 0.33).toFixed(2)
    //    $('#price').html(price + '₽')
    // })

    $('#hours_count').focusin(function() {
        $( this ).val(parseInt($( this ).val()))
        let price = (parseInt($( this ).val()) * 0.33).toFixed(2)
        $('#price').html(price + '₽')
        $('.precalc').html('Стоимость: '+price+'₽')
    })

    $('#hours_count').focusout(function() {
       let min_count = parseInt($( this ).val())
       if (min_count < 10) {$( this ).val('10 мин.')}
       if (min_count > 150000) {$( this ).val('150000 мин.')}
       let price = (parseInt($( this ).val()) * 0.33).toFixed(2)
       $('#price').html(price + '₽')
       $('.precalc').html('Стоимость: '+price+'₽')
       $( this ).val(parseInt($( this ).val()) + ' мин.')
    })

    $('#hours_count').on('input', function() {
       let price = (parseInt($( this ).val()) * 0.33).toFixed(2)
       $('#price').html(price + '₽')
       $('.precalc').html('Стоимость: '+price+'₽')
    })


})