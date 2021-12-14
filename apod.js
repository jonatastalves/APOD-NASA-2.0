function buscaApi() {

    const diaProcurado = $('#date').val();
    const apiKey = '2eZoYxEyFXpbbfpxMTXsdNjvJ8G0Eb1WqLSLUWsj';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${diaProcurado}`;

    document.querySelector('#parteBaixo').style.display = "flex";
    
    $.ajax({
        type: 'GET',
        url: url,
        success: function(response){
            $('#tituloApi').text(response.title);
            $('#imgApi').attr('src', response.url)
            $('#textApi').text(response.explanation)
        }
    })
}