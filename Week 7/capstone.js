const oList = document.createElement('ol');
getData();


async function getData() {
    const listRes = await axios.get("http://api.bryanuniversity.edu/coltonfreeman/list");
    const funRes = await axios.get("https://catfact.ninja/fact");
    const pendingDataPromises = [listRes, funRes.data.fact];
    Promise.all(pendingDataPromises)
        .then(data => createList(data))
        .catch(err => console.log(err))
}

function displayFacts(data) {
    let funFacts = document.createElement('h3');
    funFacts.textContent = `Fun Facts: ${data}`;
    document.body.appendChild(funFacts);
}


function createList(data) {

    let lists = data[0].data;
    for (let i = 0; i < lists.length; i++) {

        let li = document.createElement('li');
        li.setAttribute('id', lists[i]._id);
        li.innerHTML += `
                ${lists[i].description}
                <button onClick="updateLi()">&#10003</button>
                <button onclick="deleteLi()">&#10006</button>
            `
        oList.appendChild(li);

    }
    document.body.appendChild(oList);
    displayFacts(data[1]);
}

async function deleteLi() {
    let listID = this.event.target.parentNode.id;
    let response = await axios.delete(`http://api.bryanuniversity.edu/colrtonfreeman/list/${listID}`);
    location.reload();
}

function updateLi() {
    let item = this.event.target.parentNode;
    item.style.textDecoration = 'line-through';
    const updates = {
        isComplete: true
    }

    axios.put(`http://api.bryanuniversity.edu/coltonfreeman/list/${item.id}`, updates)
        .then(res => console.log(res))
        .catch(err => console.log(err))

}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const newTodo = {
        name: document.querySelector('#list-name').value,
        description: document.querySelector('#list-description').value,
        completed: false
    }
    axios.post('http://api.bryanuniversity.edu/coltonfreeman/list', newTodo)
        .then(data => appendToList(data))
        .catch(err => console.log(err))

});

function appendToList(data) {
    let li = document.createElement('li');
    li.textContent = data.data.description;
    document.querySelector('ul').appendChild(li);
    location.reload();
}