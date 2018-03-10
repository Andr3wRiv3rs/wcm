let server = {
    ip: "138.68.253.199",
    ports: {
        main: 80,
        db: 27017,
        tunnel: 3000
    }
}

let $get = ( url, c )=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            c(xhttp.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

let mongo = ( q,c ) => {
    $get('https://'+server.ip+':'+server.ports.tunnel+'/'+q, d=>c(d));
};