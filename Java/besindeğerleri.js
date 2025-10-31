/* food content start */
const foods = document.querySelectorAll(".food");

foods.forEach(foods => {
    const scoreDiv = foods.querySelector(".score");
    const labelDiv = foods.querySelector(".label");
    const score = parseInt(scoreDiv.textContent);

    if (score < 40)
    {
        scoreDiv.style.backgroundColor = "#ff4b4b";
        labelDiv.textContent = "Sağlıksız Besin";
    }
    else if (score < 70)
    {
        scoreDiv.style.backgroundColor = "#ffbe46";
        labelDiv.textContent = "Kısmen Sağlıklı";
    }
    else
    {
        labelDiv.textContent = "Sağlıklı Besin";
    }
});
/* food content end */

/* filter start */
const healthyBtn = document.getElementById("healthyBtn");
const halfhealthyBtn = document.getElementById("halfhealthyBtn");
const unhealthyBtn = document.getElementById("unhealthyBtn");

let activeBtn = null; 

function resetCards() 
{
    foods.forEach(card => card.style.display = "flex");
}

function resetButtons() 
{
    healthyBtn.classList.remove("focus");
    halfhealthyBtn.classList.remove("focus");
    unhealthyBtn.classList.remove("focus");
    activeBtn = null;
}

function filterCards(min, max) 
{
    foods.forEach(card => {
        const score = parseInt(card.querySelector('.score').textContent);
        if (score < min || score > max) 
        {
            card.style.display = "none";
        }
    });
}

healthyBtn.addEventListener('click', () => {
    if (activeBtn === healthyBtn) 
    {
        resetCards();
        resetButtons();
    } else {
        resetCards();
        resetButtons();
        filterCards(70, 100);
        healthyBtn.classList.add("focus");
        activeBtn = healthyBtn;
    }
});

halfhealthyBtn.addEventListener('click', () => {
    if (activeBtn === halfhealthyBtn) {
        resetCards();
        resetButtons();
    } else {
        resetCards();
        resetButtons();
        filterCards(40, 70);
        halfhealthyBtn.classList.add("focus");
        activeBtn = halfhealthyBtn;
    }
});

unhealthyBtn.addEventListener('click', () => {
    if (activeBtn === unhealthyBtn) {
        resetCards();
        resetButtons();
    } else {
        resetCards();
        resetButtons();
        filterCards(0, 40);
        unhealthyBtn.classList.add("focus");
        activeBtn = unhealthyBtn;
    }
});
/* filter end */