fetch('./data.json')
  .then(res => res.json())
  .then(data => data.forEach(element => {
    console.log(element);
    const div = document.querySelector(`.${element.day}`)
    const span = document.querySelector(`.${element.day} span`)
    div.setAttribute('style',`height:${element.amount*4}px`)
    span.innerHTML = element.amount
  }));