const time = document.createElement('h1');
time.classList.add('time')
document.querySelector('.app').appendChild(time);
async function getDate() {
  const url = `http://localhost:5000`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    time.textContent = data;
  } catch {
    console.log("error");
  }
}
const button = document.querySelector('.button');
button.addEventListener('click', getDate);
