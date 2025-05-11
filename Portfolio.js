let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname,event) {
    // Remove 'active-link' class from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Hide all tab contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

 var sidemenu=document.getElementById("side-menu");
 function openmenu(){
    sidemenu.style.right="0";
 }
 function closemenu(){
    sidemenu.style.right="-200px";
 }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwtshCuOD0jKjUhWGw0tgPRiKvizeL-3yjGdnhn25CsdLKRqtc5vB8ATM34sOzMa3wNKA/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!";
        setTimeout(() => msg.innerHTML = "", 1000);
        form.reset();
      })
      .catch(error => {
        msg.innerHTML = "Something went wrong!";
        console.error('Error!', error.message);
      });
  }); 