const btnSubmit = document.querySelector('.front-submit')
const btnBack = document.querySelector('.back-btn')
const rotateFront = document.querySelector('.front')
const rotateBack = document.querySelector('.back')
const value = document.querySelectorAll('.front-value')
const selectValue = document.querySelector('.back-select-value')

/* -------- SUBMIT -------- */
btnSubmit.addEventListener('click', () => {
    rotateFront.style.transform = 'rotateY(180deg)';
    rotateBack.style.transform = 'rotateY(360deg)';
})

/* -------- BACK -------- */
btnBack.addEventListener('click', () => {
    rotateFront.style.transform = 'rotateY(0deg)';
    rotateBack.style.transform = 'rotateY(180deg)';
})

/* -------- STARS -------- */
value.forEach(select => {
    select.addEventListener('click', () => {
      value.forEach(rem => rem.classList.remove('select'));
      select.classList.add('select');
      selectValue.textContent = select.value
    });
});
  
