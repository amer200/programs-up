const sendSerch = (e) => {
    fetch('/get-search-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload: e.value })
    }).then(res => {
        return res.json()
    }).then(data => {
        let payload = data.payload;
        console.log(payload)
    }).catch(err => {
        console.log(err)
    })
}