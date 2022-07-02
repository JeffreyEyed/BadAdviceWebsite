//Countdown in the Footer
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "05/02/",
        theEnd = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > theEnd) {
      theEnd = dayMonth + nextYear;
    }
    
    //end
    
    const countDown = new Date(theEnd).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = '"End of the WORLD!!!!" [Goodbye]';
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


// This is for the Ask Your Question section

    // document.querySelector('#secondButton').addEventListener('click', searchBar)

    // function searchBar() {
    //   const cb = document.querySelector('#searchBar').value
      
    //   if(cb === "You're Awesome" ){
    //     /*alert("Yeah I know it!")*/
    //     document.querySelector("#printResults").innerText = "Yeah I know it!"
    //   }else if(cb === ("")){
    //     /*alert("You didn't type anything DUMMY!")*/
    //     document.querySelector("#printResults").innerText = "You didn't type anything DUMMY!"
    //   }else{
    //     /*alert("I'm not answering that.  You're dumb!")*/
    //     document.querySelector("#printResults").innerText = "I'm not answering that.  You're dumb!"
    //   }

    // }

    /////// API ///////

    document.querySelector('#firstButton').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('#adviceGoesHere').value
  //console.log(choice)
  const url = `https://badadvice.vercel.app/api/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#adviceGoesHere').innerText = data

      })
       
      
      .catch(err => {
          console.log(`error ${err}`)
      }
    )}
//Figure out how to erase text once button has been pushed
//This is to show Joe