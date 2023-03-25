const printData=()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            document.getElementById("p1").innerHTML = "Latitude: "+position.coords.latitude;
            document.getElementById("p2").innerHTML = "Longitude: " +position.coords.longitude;

            
            var currentdate = new Date(); 
            var datetime = "Check In: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                document.getElementById("p3").innerHTML = datetime;
            });
    }
}
