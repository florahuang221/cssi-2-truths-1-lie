const submitResponse = () => {
    console.log('Submitting responses');
    const truth1Input = document.querySelector('#truth1');
    const truth2Input = document.querySelector('#truth2');
    const lieInput = document.querySelector('#lie');

    const truth1Value = truth1Input.value;
    const truth2Value = truth2Input.value;
    const lieValue = lieInput.value;

    //send to firebase
    firebase.database().ref().push({
        truth1: truth1Value,
        truth2: truth2Value,
        lie: lieValue
    });

    truth1Input.value = '';
    truth2Input.value = '';
    lieInput.value = '';
};