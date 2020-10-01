const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  if (hours >= 12) {
    hours -= 12;
  }
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const timeComponents = [hours, minutes, seconds, amPm]
    .map(cmp => `<span>${String(cmp).padStart(2, '0')}</span>`);

  return `${timeComponents.join(':')}`;
}

const init = () => {
  setInterval(() => {
    document.getElementById('time').innerHTML = getTime();
  }, 1000);
}

init();