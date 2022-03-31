let listaFilmes = ["http://d3ugyf2ht6aenh.cloudfront.net/stores/001/106/380/products/capa_greysanatomy1-7dedc6947c4d7f007e16298273896776-640-0.png", 
"https://upload.wikimedia.org/wikipedia/pt/b/b5/Pll-season-7-poster.jpg", 
"https://resizing.flixster.com/RP1KKxlbEX5flfVjM6e8J3yHmqs=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjI1Mzk5NS53ZWJw", 
"https://br.web.img3.acsta.net/pictures/14/03/31/19/28/462555.jpg"]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">" );
}