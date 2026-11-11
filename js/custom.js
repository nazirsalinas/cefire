$(function() {

	// Detección moderna y ligera para dispositivos móviles
	window.mobilecheck = function() {
		return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	};

	// Parallax con Stellar
	if(!window.mobilecheck() && $.fn.stellar){
		$.stellar({
			responsive: true,
			horizontalScrolling: false
		});
	}
	
	// Barra de navegación fija con Affix al scrollear
	if($('.homepage .navbar').length > 0 && $.fn.affix){
		$('.homepage .navbar').affix({
			offset: {
				top: 100,
				bottom: function () {
					return (this.bottom = $('.footer').outerHeight(true));
				}
			}
		});
	}
	
	// Carrusel de imágenes de pacientes / mascotas
	if ($("#carousel").length > 0 && $.fn.carouFredSel){
		$('#carousel').carouFredSel({
			responsive: false,
			scroll: 1,
			pagination: "#pager",
			items: {
				width: 374,
				visible: {
					min: 2,
					max: 20
				}
			}
		});
	}
	
	// Pestañas (Tabs)
	if ($("#tabs").length > 0 && $.fn.tabs){
		$("#tabs").tabs();
	}
	
	// Acordeón
	if ($("#accordion").length > 0 && $.fn.accordion){
		$("#accordion").accordion();
	}
	
	// Google Maps (solo si el API de Google está cargado)
	if ($("#map").length > 0 && typeof google !== 'undefined' && $.fn.gmap3){
		$('#map').gmap3({
			map: {
			    options:{
			        zoom: 16,
			        center: [-34.9333, -57.9650], // La Plata, Buenos Aires
			        mapTypeId: google.maps.MapTypeId.ROADMAP,
			        mapTypeControl: false,
			        navigationControl: false,
			        scrollwheel: false,
			        streetViewControl: false
			    }
			},
			marker:{
			    latLng: [-34.9333, -57.9650],
			    options: {
				    icon: new google.maps.MarkerImage(
				        "images/map-pin.png", new google.maps.Size(223, 167, "px", "px")
				    )
			    }
			}
		});
	}
	
	// Delegación de llamadas para Lightbox
	if ($.fn.ekkoLightbox) {
		$(document).delegate('*[data-toggle="lightbox"], .lightbox', 'click', function(event) {
			event.preventDefault();
			return $(this).ekkoLightbox();
		});
	}
	
	// Desplazamiento suave para enlaces ancla (#seccion)
	$('a[href^="#"]:not([href="#"]):not([data-toggle="dropdown"]):not([data-slide])').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			var offset = 80;
			$('html, body').stop().animate({
				scrollTop: target.offset().top - offset
			}, 600);
			if ($('.navbar-collapse').hasClass('in')) {
				$('.navbar-collapse').collapse('hide');
			}
		}
	});

});
