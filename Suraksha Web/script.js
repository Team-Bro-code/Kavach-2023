const getlocation=()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            var loc=position;
            console.log(loc);
        });
    }
}