const getlocation=()=>{
    //get location from user
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            // console.log(position);
            let latitude=position.coords.latitude;
            let longitude=position.coords.longitude;
            console.log("Long: "+longitude+",Latitude:"+latitude);
        });
    }
}