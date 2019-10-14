import './SeasonDisplay.css';
import React from 'react';


// here we declare an object . so we can destructure this object and extract individual data from it like const {keys of object} = seasonConfig[season] = here season will be summer or winter depends on the latitude.  and the keys text, iconName will be distributed according to the season array element like summer or winter.
// config object 
const seasonConfig = {
    summer : {
        text:"Let's hit the beach",
        iconName: 'sun'
    },
    winter : {
        text:'Burr it is cold!',
        iconName: 'snowflake'
    }
}

// let define a function which take lat and current month as arguments 
const getSeason = (lat,month) =>{
    // if a month is greater than 2 and less than 9- it is summer in Northern Hemisphere
    if (month > 2 && month < 9){ 
        return lat > 0 ? 'summer':'winter'; // if lat is > 0; we are in northern hemisphere and it wil retun summer...else  will return winter
    } else {
        return lat > 0 ? 'winter':'summer';
    }

}

// functional component
const SeasonDisplay = (props) =>{
    // get the current lat and current month form the user
   const season = getSeason(props.lat,new Date().getMonth());
   // here season will return an array like season[summer/winter]

   const {text,iconName} = seasonConfig[season]; // here we do array destructuring, and assign the object seasonConfigs key properties {text,iconName} according to the actual season that will fecth by the season array
   // const {text,iconName} = seasonConfig[summer] will return the actual text and iconName of summer season.


//    const text = season === 'winter'? 'Burr it is Chilly':'Lets hit the beach'; // if season === winter , then text will be Burr it is chilly; 

//    const icon = season === 'winter' ? 'snowflake':'sun';
//    // if season === winter then icon = snowflake

// className = {`season-display ${season}`} here we added two class for styling season-display and a season name like winter or summer

   return   <div className = {`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`}> </i> 
                    <h1>{text}</h1>
                <i className={`icon-right massive ${iconName} icon`}> </i> 
            </div>;
};

export default SeasonDisplay;