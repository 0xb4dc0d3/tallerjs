$('#myModal').on('show.bs.modal', function(e) {
  //Obtain selection of customer
  var regions = ['','Arica','Iquique','Antofagasta','Copiapo','La Serena','Valparaíso','Santiago','Rancagua','Talca','Concepcion','Temuco','Valdivia','Puerto Montt','Coyhaique','Punta Arenas'];

  // IDEA: Popular de opciones segùn corresponda
  $("#regions").change(function() {
    for (var i = 0; i < regions.length; i++) {
      if ($(this).val() == i) {
        $('#cities').html(''); //Clean
        $('#cities').append($('<option>', {
          value: i,
          text: regions[i]
        }));
      }
    }
  });

});
