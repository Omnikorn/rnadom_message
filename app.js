// getting the day of the week

const theDay = () =>{
const d= new Date;
let day = d.getDay();
let actualDay 
switch (day){
    case 0:
        actualDay = "Sunday";
        break;
    case 1:
        actualDay = "Monday";
        break;
    case 2:
        actualDay = "Tuesday";
        break;
    case 3:
        actualDay = "Wednesday";
        break;
    case 4:
        actualDay = "Thursday";
        break;
    case 5:
        actualDay = "Friday";
        break;
    case 6:
        actualDay = "Saturday"
        break
}
return actualDay
}

console.log(theDay())