document.getElementById('fetchDataButtonName').addEventListener('click', function() {
    fetchData('name');
});

document.getElementById('fetchDataButtonCapital').addEventListener('click', function() {
    fetchData('capital');
});

document.getElementById('fetchDataButtonArea').addEventListener('click', function() {
    fetchData('area');
});

function fetchData(key) {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => afficherData(data, key));
}

function afficherData(data, key) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i][key]);
    }}

    