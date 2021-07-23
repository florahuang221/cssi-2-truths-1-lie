//get a random response
window.onload = function(){
    getResponse();
}


const getResponse = () => {
    const messageRef = firebase.database().ref();

    messageRef.on("value", (snapshot) => {
        const data = snapshot.val();
        console.log(data);

        let size = 0;

        for(const recordKey in data){
            size++;
        }
        console.log(size);

        //gives us our rando number :)
        let randomval = getRandomInt(size);
        console.log(randomval);

        
        const record = data[randomval];
        console.log(record);

    });

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//check if guess is correct (if matches colour card green)

//