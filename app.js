const myRequest = () => {
    return fetch('http://localhost:5000/operations')
        .then(data => {
            return data.json();
        })
        .then(myData => {
            return  myData.operations;
        })
        .catch(function (error) {
            console.log(error.message)
        });
}

const postMyData = (myState) => {
    const form_data = new FormData();
    for ( let key in myState.value ) {
        form_data.append(key, myState.value[key]);
    }
    const options = {
        method: 'POST',
        body: form_data,
    };
    return fetch('http://localhost:5000/operation', options)
        .then(data => {
            return data.json();
        })
        .then(update => {
            console.log(update);
            return true;
        })
        .catch(e => {
            console.log(e);
        });
}
