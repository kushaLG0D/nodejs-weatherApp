console.log('Weather MERN Project');

let submitBtn=document.getElementById('submitBtn');
let cityName=document.getElementById('cityName');
let city_name=document.getElementById('city_name');
let temp=document.getElementById('temp');
let temp_status=document.getElementById('temp_status');
let data_hide=document.querySelector('.middle_layer');

let getInfo=async function(event){
    event.preventDefault();
    let cityVal=cityName.value;   
    if (cityVal===""){
        city_name.innerText='Please write city name befor you search';
        data_hide.classList.add('data_hide');
    } else
     {try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=70b382441911829f62718bbacf2d8807`
            const response=await fetch(url);
            const data= await response.json();
            const arrData=[data];
        
            city_name.innerText=`${arrData[0].name} ,${arrData[0].sys.country}`
            temp.innerText=`${arrData[0].main.temp}°C`;
            let tempMood=arrData[0].weather[0].main;

            if (tempMood==`Clouds`) {
                temp_status.innerHTML=`<i class="fa fa-cloud" style='color:#f1f2f6'></i>`
            } 
            else if (tempMood==`Clear`) {
                temp_status.innerHTML=`<i class="fa fa-sun" style='color:#eccc68'></i>`
            } 
            else if (tempMood==`Rain`) {
                temp_status.innerHTML=`<i class="fa fa-cloud-rain" style='color:#a4b0be'></i>`
            } 
            else {
                temp_status.innerHTML=`<i class="fa fa-cloud" style='color:##eccc68'></i>`
            } 
            data_hide.classList.remove('data_hide');

        }
            catch{
                city_name.innerTexT='Please write city name correctly..';
                data_hide.classList.add('data_hide');

            }
        }
    }
submitBtn.addEventListener('click',getInfo);



let navBtn=document.getElementById('navBtn');

let navBtnToggler=function() {
    console.log('i clicked btn');
    
    if(navBtn.hasAttribute('data-toggle')){
        navBtn.removeAttribute('data-toggle');;
    }
    else{
        navBtn.setAttribute('data-toggle','collapse');
        }

}



navBtn.addEventListener('click',navBtnToggler);




