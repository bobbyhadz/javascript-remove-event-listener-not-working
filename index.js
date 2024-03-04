// removeEventListener not working in JavaScript

console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

function logger() {
  console.log('Button clicked');
}

btn.addEventListener('click', logger);

// ✅ Works
btn.removeEventListener('click', logger);
