window.addEventListener('scroll',
    moveScrollIndicator);

const scrollIndicatorElt =
document.getElementById('scrollIndicator');

const maxHeight =
window.document.body.scrollHeight
- window.innerHeight;

function moveScrollIndicator(e) {
const percentage = 
    ((window.scrollY) / maxHeight) * 100;

scrollIndicatorElt.style.width
    = percentage + '%';
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar ul li');
  
    links.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.sidebar ul li.active').classList.remove('active');
            document.querySelector('.sidebar ul li a.active').classList.remove('active');
            
            this.classList.add('active');
            this.querySelector('a').classList.add('active');
        });
    });
});

const headings = document.querySelectorAll('h2');
headings.forEach((heading, index) => {
    const anchorNumber = index.toString(16).padStart(2, '0'); // Преобразуем индекс в шестнадцатиричное число
    const anchorLink = document.createElement('a');
    anchorLink.href = `#${anchorNumber}`;
    anchorLink.textContent = `0x${anchorNumber}`;
    anchorLink.className = 'anchor';
    anchorLink.style.marginRight = '10px'; // Добавляем отступ между якорем и заголовком
    heading.insertAdjacentElement('afterbegin', anchorLink);
    heading.id = anchorNumber; // Присваиваем идентификатор заголовку
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});