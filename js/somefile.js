
console.log("5");


const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

console.log(collapseList);


const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
     ` <div class="alert alert-${type} alert-dismissable" role="alert">`,
     ` <div>${message}</div>`,
     ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
].join('')

alertPlaceholder.append(wrapper);
}

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
alertTrigger.addEventListener('click',() => {
appendAlert('Nice, you did something!', 'success')
})
}
