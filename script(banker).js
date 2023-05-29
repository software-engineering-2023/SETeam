const cardbtn = document.getElementById("cardapp")


cardbtn.addEventListener('click',()=>{
    window.location.href = 'cardApps.html';
})

function accResolve(accept,freeze,reject){
    accept.disabled=true;
    freeze.style.display="none";
    reject.style.display="none";
}
function frzResolve(accept,freeze,reject){
    freeze.disabled=true;
    accept.style.display="none";
    reject.style.display="none";
}
function rejResolve(accept,freeze,reject){
    reject.disabled=true;
    freeze.style.display="none";
    accept.style.display="none";
}

