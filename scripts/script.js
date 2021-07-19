// JavaScript Document

//FAVICON
var icons = [
			"https://akidaniel.github.io/menucatalina/imagenes/favicons/apple-icon-180x180.png",
                "https://akidaniel.github.io/menucatalina/imagenes/favicons/favicon-32x32.png",
                "https://akidaniel.github.io/menucatalina/imagenes/favicons/favicon.ico",
            ];

            var idx = localStorage["favicon"];
            if (idx === undefined) {
                idx = 0;
            } else {
                idx = parseInt(idx);
            }

            localStorage["favicon"] = (idx + 1) % icons.length;

            var link = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'icon';
            link.href = icons[idx];
            document.getElementsByTagName('head')[0].appendChild(link);
//IDIOMAS
$(document).ready(function() {

var display = function(block_name) {
  $('.menuitem').css('display', 'none');
  $('#' + block_name).css('display', 'block');
  $('.' + block_name).css('display', 'block');


}

$('.UK').on('click', function() {
  display('LUK', $(this));
});

$('.ES').on('click', function() {
  display('LES', $(this));
});


$('.FR').on('click', function() {
  display('LFR', $(this));
});
});

//MENUS
$(document).ready(function() {

var display = function(block_name) {
  $('.menucomida, .menudevinos, .menudepostres').css('display', 'none');
  $('#' + block_name).css('display', 'block');
  $('.' + block_name).css('display', 'block');
}

$('.platos').on('click', function() {
  display('menucomida', $(this));
});

$('.vinos').on('click', function() {
  display('menudevinos', $(this));
});

$('.postres').on('click', function() {
  display('menudepostres', $(this));
});

});
