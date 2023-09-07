const modals = () => {  
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-model]');



        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = 'none'
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('model-open'); //для скрола при открытом окне
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none'
            });
                modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('model-open'); //для скрола при открытом окне
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none'
                });
                modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('model-open'); //для скрола при открытом окне
            }
        });
    }

    function showModelByTime(selector, time) {
        setTimeout(function (){
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModelByTime('.popup', 60000); //для выхода модального окна  в течении 60 сек 
};
export default modals;  