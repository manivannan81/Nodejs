let index = 0;
setTimeout(()=>{
    console.log('Welcome to Nodejs tutoails')}, 1000);

  var timer =  setInterval(() =>
    {
        index+=2;
        console.log(new Date() +"  " + index);
        if(index > 6)
        {
            //clearInterval(timer);
        }
    }, 3000);