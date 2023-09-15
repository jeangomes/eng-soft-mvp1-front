const myRequest = (codeFilter) => {
    let url = 'http://localhost:5000/operations'
    if (codeFilter !== '') {
        url = 'http://localhost:5000/operations?code=' + codeFilter
    }
    return fetch(url)
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

const myRequestOneRecord = (id) => {
    return fetch('http://localhost:5000/operation?operation_id=' + id)
        .then(data => {
            return data.json();
        })
        .then(myData => {
            // console.log(myData)
            return  myData;
        })
        .catch(function (error) {
            console.log(error.message)
        });
}

const postMyData = (myState) => {
    const form_data = new FormData();
    for ( let key in myState ) {
        form_data.append(key, myState[key]);
    }
    const options = {
        method: 'POST',
        body: form_data
    };
    return fetch('http://localhost:5000/operation', options)
        .then(data => {
            return data.json();
        })
        .then(update => {
            // console.log(update);
            return true;
        })
        .catch(e => {
            console.log(e);
        });
}

const updateMyData = (myState) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(myState),
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch('http://localhost:5000/operation/' + myState.id, options)
        .then(data => {
            return data.json();
        })
        .then(update => {
            return true;
        })
        .catch(e => {
            console.log(e);
        });
}

const deleteRecord = (id) => {
    return fetch('http://localhost:5000/operation?operation_id=' + id, { method: 'DELETE' })
        .then(data => {
            return data.json();
        })
        .then(myData => {
            console.log(myData)
            return  myData;
        })
        .catch(function (error) {
            console.log(error.message)
        });
}
