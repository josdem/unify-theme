var ContactPage = function () {

    return {

    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,
				lat: 40.748866,
				lng: -73.988366
			  });

			  var marker = map.addMarker({
				lat: 40.748866,
				lng: -73.988366,
	            title: 'Company, Inc.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 20.689033041405974,
		        lng : -103.3484860207768
		      });
		    });
		}

    };
}();
