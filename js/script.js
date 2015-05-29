// function readPath(input) {

//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#blah').attr('src', e.target.result);
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// $("#imgInp").change(function(){
//     readPath(this);
// });


// alert('cool');

$('#blah').hide();
$('#remove').hide();  

	function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function(){
        if( $('#imgInp').val()!=""){

            $('#remove').show();
            $('#shh').hide();
            $('#blah').show('slow');
      }
        else{ $('#remove').hide();$('#blah').hide('slow');}
        readURL(this);
    });


    $('#remove').click(function(){
    	  $('#shh').show();
          $('#imgInp').val('');
          $(this).hide();
          $('#blah').hide('slow');
	});