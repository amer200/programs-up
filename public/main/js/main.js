// search //////////////////////////////////////////////
const resultBox = document.getElementById('searchResult');
const createSearchResult = (id, title) => {
    const myLi = document.createElement('li');
    myLi.classList.add('list-group-item');
    const content = `<a href="/art/${id}">${title}</a>`
    myLi.innerHTML = content
    resultBox.appendChild(myLi)
}
const sendSerch = (e) => {
    if (e.value !== '') {
        fetch('/get-search-result', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ payload: e.value })
        }).then(res => {
            return res.json()
        }).then(data => {
            let payload = data.payload;
            resultBox.innerHTML = ' ';
            payload.forEach(p => {
                createSearchResult(p._id, p.title);
            });
        }).catch(err => {
            console.log(err)
        })
    } else {
        resultBox.innerHTML = ' ';
    }
}
//////////////////////////////////////////////////////////
// categs

const getByCateg = (categ, e) => {
    const all = Array.from(document.getElementsByClassName('card'));
    const targetA = Array.from(document.getElementsByClassName(categ));
    const categsLink = Array.from(document.getElementsByClassName('categs-link'));
    categsLink.forEach(c => {
        c.classList.remove('active');
    })
    e.classList.add('active')
    if (categ !== 'all') {
        all.forEach(a => {
            a.classList.add('d-none');
        })
        targetA.forEach(t => {
            t.classList.remove('d-none')
        })
    } else {
        all.forEach(a => {
            a.classList.remove('d-none');
        })
    }
}