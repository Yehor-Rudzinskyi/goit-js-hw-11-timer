import './styles.css';

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
}


const date = new Date(2021, 5, 4);
const deadTime = date.getTime();

setInterval(() => {
    const time = deadTime - Date.now() 
    refs.days.textContent = `${pad(Math.floor(time / (1000 * 60 * 60 * 24)))}`;
    refs.hours.textContent = `${pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))}`;
    refs.mins.textContent = `${pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))}`;
    refs.secs.textContent = `${pad(Math.floor((time % (1000 * 60)) / 1000))}`;
}, 1000);


function pad(value) {
  return String(value).padStart(2, '0');
}

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
