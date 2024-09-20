



document.addEventListener("DOMContentLoaded", () => {

    const tabButtons = document.querySelectorAll("tab-button");
    const tabContents = document.querySelectorAll("tab-content");

    tabButtons.forEach(item => {

        item.addEventListener('click', () => {

            const targetId = item.getAttribute('data-target');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            item.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    })

    console.log(tabButtons)

    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }

})