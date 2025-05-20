$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {

          event.preventDefault();
          //$('a').removeClass('active');
          //$(this).addClass('active');

          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
    });

    $(window).on('scroll', function() {
        $('.target').each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('a').removeClass('active');
                $('a[href="#'+ id +'"]').addClass('active');
            }
        });
    });
});

$("#show-menu").click(function(){
  $("#hide-menu").slideToggle();
});

$('#hide-menu a').click(function(){
$("#hide-menu").slideToggle();
});

$('[data-toggle="tooltip"]').tooltip();
$('.btn-modal').tooltip();

function changeSRC(srcPath){
        $("#figura12").attr("src", srcPath);
}
$("#fusiforme-12").click(function(){
  $("#modal-fusi").modal();
});
$("#circ-12").click(function(){
  $("#modal-circ-12").modal();
});
$("#diag-12").click(function(){
  $("#modal-diag-12").modal();
});
$("#multi-12").click(function(){
  $("#modal-multi-12").modal();
});
$("#triang-12").click(function(){
  $("#modal-triang-12").modal();
});
$("#quad-12").click(function(){
  $("#modal-quad-12").modal();
});
$("#musc-fino-12").click(function(){
  $("#modal-musc-fino-12").modal();
});
$("#seim-12").click(function(){
  $("#modal-seim-12").modal();
});
$("#pen-12").click(function(){
  $("#modal-pen-12").modal();
});
$("#musc-par-12").click(function(){
  $("#modal-musc-par-12").modal();
});
function scrollTopNHeight(seletor) {
   setTimeout(function(){ $('html, body').animate({scrollTop:$(seletor).offset().top - 100}, 300);
 }, 500);
}


