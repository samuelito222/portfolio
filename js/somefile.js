
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#list-example'
});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const popover = new bootstrap.Popover('.example-popover', {
  container: 'body'
})

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

console.log("here");
if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click',() => {
    toastBootstrap.show();
  });
  console.log("there");
}


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
].join('');

alertPlaceholder.append(wrapper);
}


console.log("foo foo");
const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
alertTrigger.addEventListener('click',() => {
appendAlert('Nice, you did something!', 'success')
})
}


