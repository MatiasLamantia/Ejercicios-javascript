   
   //Cuando cargue el documento 
   $(document).ready(function(){

            
    //Api key de OpenWeather
    let apiKey = "a658baaa41d1c451ce198b052716f564";

    //Cuando se haga click en el botón tiempo
    $("#tiempo").click(function(e){

        e.preventDefault();

        //Se limpia el contenido del div resultado
         $("#resultado").html("");

        let ciudad = $("#ciudad").val(); // Corrección: .val() en lugar de .val

        //Se obtiene la latitud y longitud de esa ciudad mediante la API de OpenWeather
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=" + apiKey,
            type: "GET",
            dataType: "json",


            success: function(data){

                let lat = data["coord"]["lat"];
                let lon = data["coord"]["lon"];


                 //Se obtiene la previsión del tiempo mediante la API de OpenWeather
                $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&exclude=hourly,&units=metric,daily&appid=" + apiKey,

                type: "GET",
                dataType: "json",

                success: function(data){
                    console.log(data);


                    let dias = [];

                    //bucle por foreach por cada elemento de la lista
                    data["list"].forEach(function(elemento){

                        dia = elemento["dt_txt"].split(" ")[0];

                        //Si el día no está en el array de días y la hora es las 12
                        if(!dias.includes(dia) && elemento["dt_txt"].split(" ")[1] == "12:00:00"){

                            //Se guarda el día en el array de días
                            dias.push(dia);
   
                            //Se muestran los importantes
                            $("#resultado").append(`<div class='dia'>
                                                        <section class="tituloDia">
                                                            <h2>${dia.split("-")[2] +"/"+dia.split("-")[1] + "/" +dia.split("-")[0]}</h2>
                                                            <img src='http://openweathermap.org/img/wn/${elemento["weather"][0]["icon"]}.png' class="iconoTiempo">
                                                        </section>
                                                        
                                                        
                                                        <p>Temperatura: ${elemento["main"]["temp"]}</p>
                                                        <p>Viento: ${elemento["wind"]["speed"]} m/s ${elemento["wind"]["deg"]}º</p>
                                                        <p>Tiempo: ${elemento["weather"][0]["description"]}</p>
                                                        <p>Lluvia: ${elemento["weather"][0]["main"]}</p>
                                                        <p>Hora del anochecer: ${data["city"]["sunset"]}</p>
                                                        <p>Hora del amanecer: ${data["city"]["sunrise"]}</p>
                                                        <p>Visibilidad: ${elemento["visibility"]}m</p>
                                                    </div>`);   
                      

                        }

                    });
                    


                },

                error: function(){
                    console.log("Error al obtener la previsión del tiempo");
                },

                });   
            },

            error: function(){
                console.log("Error al obtener la latitud y longitud");
            },

        });

                
    });



    //Cuando se haga click en el botón contaminación
    $("#contaminacion").click(function(e){

        e.preventDefault();
        //Se limpia el contenido del div resultado
        $("#resultado").html("");

        //Se extrae el valor del input
        let ciudad = $("#ciudad").val(); 

        //Se obtiene la latitud y longitud
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=" + apiKey,
            type: "GET",
            dataType: "json",
            success: function(data){
                let lat = data["coord"]["lat"];
                let lon = data["coord"]["lon"];

                //Se obtiene la previsión del tiempo
                fetch("http://api.openweathermap.org/data/2.5/air_pollution?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey)
                
                    .then(response => response.json())

                    .then(data => {

                        console.log(data);

                        //Se muestran los importantes
                        document.getElementById("resultado").innerHTML = `<div class='contaminacion'>
                            <h2>Contaminación en ${ciudad}:</h2>
                            <hr>
                            <p>CO: ${data["list"][0]["components"]["co"]}</p>
                            <p>NO: ${data["list"][0]["components"]["no"]}</p>
                            <p>NO2: ${data["list"][0]["components"]["no2"]}</p>
                            <p>O3: ${data["list"][0]["components"]["o3"]}</p>
                        </div>`;
                    })
                    .catch(error => {
                        console.error("Error al obtener la previsión del tiempo:");
                    
            });
  
            },

            error: function(){
                console.log("Error al obtener la latitud y longitud");
            },

        });

                
    });
});


