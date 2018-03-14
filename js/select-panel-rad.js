$(document).ready(function(){ //Make script DOM ready
    $('#tipoRadicacion').change(function() { //jQuery Change Function
        var opval = $(this).val(); //Get value from select element
        if(opval=="salida"){ //Compare it and if true
            $('#panel-salida').collapse("show")
			$('#panel-traslado').collapse("hide")
        }
		if(opval=="traslado"){ //Compare it and if true
            $('#panel-traslado').collapse("show")
			$('#panel-salida').collapse("hide")
        }
    });
});