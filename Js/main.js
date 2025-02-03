// ***** Taking elements from HTML *****
const notification = document.querySelectorAll('.notification');
const msgUps       = document.querySelectorAll('.msgUp');
const dots         = document.querySelectorAll('.dot');
const markAsRead   = document.querySelector('h2');
const number       = document.querySelector('#number');
const Risky        = document.querySelector('#Risky');
const hiddenText   = document.querySelector('#hiddenText');
const kimPic       = document.querySelector('#kimPic');

let unreadCount = 7;

number.textContent = unreadCount;

msgUps.forEach(msgUp => {
    msgUp.addEventListener('click', (event) => {
        const parentDiv = event.target.closest('.notification');
        if(parentDiv.classList.contains('read')) {
            return;
        }
        parentDiv.classList.add('read');
        parentDiv.style.background = 'none';

        const dot = msgUp.querySelector('.dot');
        dot.style.display = 'none';

        unreadCount--;
        number.textContent = unreadCount;
        if (unreadCount === 0) {
            number.style.display = 'none';
        }

        if(msgUp.id === 'Rizky') {
            hiddenText.style.display        = 'flex';
            hiddenText.style.flexDirection  = 'column';
            hiddenText.style.justifyContent = 'center';
            hiddenText.style.alignItems     = 'start';
        }

        if(msgUp.id === 'Kim') {
            kimPic.style.display = 'inline';
        }
    })
});

markAsRead.addEventListener('click', () => {
    notification.forEach(notificationDiv => {
        notificationDiv.classList.add('read');
        notificationDiv.style.background = 'none';

        const dot = notificationDiv.querySelector('.dot');
        if (dot) {
            dot.style.display = 'none';
        }

        if(notificationDiv.id === 'Rizky-notification') {
            hiddenText.style.display        = 'flex';
            hiddenText.style.flexDirection  = 'column';
            hiddenText.style.justifyContent = 'center';
            hiddenText.style.alignItems     = 'start';
        }
    
        if(notificationDiv.id === 'Kim-div') {
            kimPic.style.display = 'inline';
        }    
    });

    unreadCount = 0;
    number.textContent = unreadCount;
    number.style.display = 'none';
});