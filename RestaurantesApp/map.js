var map;
var barberias;

function loadData() {
    fetch("http://127.0.0.1:8000/apiConsultarTickets")
        .then(response => response.json())
        .then(data => {
            barberias = data;
            initMap(barberias)
                //console.log("------ datajson: ",datajson)
        });

    .then(data => {
        barberias = data;
        initMap(barberias)
    });
}



function initMap(b) {
    console.log(b);


    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 5.075569, lng: -75.526785 },
        zoom: 13,
    });




    // var marker = new google.maps.Marker({position: { lat: 5.046376, lng: -75.482093}, map: map});
    // var marker2 = new google.maps.Marker({position: { lat: 5.047349, lng: -75.482998}, map: map});
    b.forEach(barberia => {
        var marker = new google.maps.Marker({ position: barberia.geo, map: map });
        var contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">' + barberia.nombre + '</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Telefono</b><br><a href='tel:" + barberia.telefono + "'>" + barberia.telefono + "</a>" +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
            "(last visited June 22, 2009).</p>" +
            "</div>" +
            "</div>";

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener("click", function() {
            infowindow.open(map, marker);
        });
    });
}