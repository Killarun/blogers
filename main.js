const selectHeader = document.querySelectorAll('.select__header');
const selectItem = document.querySelectorAll('.select__item');
let select = function () {
       selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
        
    }
};
select();

document.onclick = function(event){
    console.log(event.target.tagName);
    if (event.target.tagName == 'DIV'){
        event.target.classList.add('select__item--active');
        }
      else if (event.target.tagName == 'H2'){
        event.target.classList.add('hc'); 
    }}
    