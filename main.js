// Développé par Benstitou Sofiane
let data = document.getElementById("counter");

function add(data){
    data.innerHTML = +data.innerHTML + 1;
    return data.innerHTML;
}

function less(data){
    data.innerHTML = +data.innerHTML - 1;
    return data.innerHTML;
}

function reset(data){
    data.innerHTML = 0;
    return data.innerHTML;
}