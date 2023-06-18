//01--(a)

const daysOfWeek = (date)=>{
   const dat = new Date(date);
   const dayNumber = dat.getDay();
    const days =["SunDay","MonDay","TuesDay","WednesDay", "ThursDay","FriDay","SaturDay"];
    const daysOfWeek =days[dayNumber];
    return daysOfWeek;
}
const date = "2021-05-12";
const result =daysOfWeek(date);
console.log(result);
//01--(b)
const currentDate= new Date();
 const currentDay = daysOfWeek(currentDate);
 console.log(currentDay);
