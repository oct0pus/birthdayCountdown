const timeLeft = document.getElementById('time-left')
let timerId = setInterval("", second)






function countDown() {
    
    second = 1000
    minute = second * 60; 
    hour = minute * 60;
    day = hour * 24; //miliseconds 




    const userMonth = document.getElementById("month").value
    const userDay = document.getElementById("day").value
    const userYear = document.getElementById("year").value 


    console.log(userMonth, userDay, userYear) 
    const strBday = userMonth + "/" + userDay + "/" + userYear; 
    console.log(strBday); 
    const birthday = new Date(strBday); 

    

    const today = new Date()
    const timeSpan = birthday - today //time span is the time difference between my birthday and today's date 
    console.log(timeSpan) // this essentially counts down to my birthday by the milisecond so it keeps "refreshing" 
                            // you can make an if else statement instead 

    if(timeSpan <= -day) { //this is to check that it's not past your birthday yet 
        timeLeft.innerHTML = "Hope you had a nice Birthday!"
        clearInterval(timerId)
        return 
    }

    if(timeSpan <= 0){ 
        timeLeft.innerHTML = "Happy Birthday!!!"
        clearInterval(timerId)
        return
    }

    // don't understand this portion, what is math.floor and why do i have to use modulus 

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.round((timeSpan % minute) / second)
    
    //can i make an array, and have the values inputted and displayed as an array ? 
    timeLeft.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ' //prints it out 
    timerId = setInterval(countDown, second) //call function every 1000 miliseconds
    
}






function bday() {
   
}




//things to learn 
// what is setInterval 
//innerHTML 
//clearInterval , although self explanatory
//math.floor 