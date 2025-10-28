let nameInput = document.getElementById('name');
let subjectInput = document.getElementById('subject');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');
let saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', () => {
  if (
    nameInput.value === '' ||
    emailInput.value === '' ||
    subjectInput.value === '' ||
    messageInput.value === ''
  ) {
    document.getElementById('messagebox').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    ok.addEventListener('click', () => {
      document.getElementById('messagebox').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
    });
  } else {
    localStorage.setItem('Name', nameInput.value);
    localStorage.setItem('Email', emailInput.value);
    localStorage.setItem('Subject', subjectInput.value);
    localStorage.setItem('Message', messageInput.value);

    document.getElementById('messagebox').style.display = 'block';
    document.getElementById('welc').textContent = "You're Welcome !";
    document.getElementById('overlay').style.display = 'block';
    ok.addEventListener('click', () => {
      document.getElementById('messagebox').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
    });
    nameInput.value = '';
    emailInput.value = '';
    subjectInput.value = '';
    messageInput.value = '';
  }
});

let butElement = document.getElementById('dropdown-arrow');
let pagesElement = document.getElementById('drop__container');

butElement.addEventListener('click', () => {
  if (pagesElement.style.display === 'block') {
    pagesElement.style.display = 'none';
        butElement.innerHTML = '→ ';
    
  } else {
    pagesElement.style.display = 'block';
    butElement.innerHTML = '↓';
  }
});