// getting the day of the week
// the function return the name of the current day of the week
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

// get your random astrological sing

const sign = () =>{
    const randNum = Math.floor(Math.random()*7)
    const signs = ["Mercury", "Mars","Venous","Pluto","The Moon","The Sun", "Jupiter"]
    const theSign = signs[randNum]
    return theSign
}

// generating random fortunes 
const fortune = () =>{
    const random = Math.floor(Math.random()*15)
    const sayings = ["A conclusion is simply the place where you got tired of thinking.","A cynic is only a frustrated optimist.", "A fanatic is one who can't change his mind, and won't change the subject.","If you look back, you’ll soon be going that way.","An alien of some sort will be appearing to you shortly.","Do not mistake temptation for opportunity.","Flattery will go far tonight.","He who laughs at himself never runs out of things to laugh at.","He who throws dirt is losing ground.","The greatest danger could be your stupidity.","The world may be your oyster, but it doesn't mean you'll get its pearl.","You will be hungry again in one hour.","The road to riches is paved with homework.","Never forget a friend. Especially if he owes you.","Never kiss an elephant on the lips"]
    return sayings[random]
}

console.log("The gods have spoken, today is " + theDay() +" your sign is "+ sign() + " for "+ fortune())