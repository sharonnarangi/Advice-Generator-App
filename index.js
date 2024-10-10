const API_LINK = "https://api.adviceslip.com/";
const adviceNumberSpan = document.querySelector(".Advice-Generator-Advice-Number");
const adviceQuoteSlot = document.querySelector(".Advice-Generator-Quote");
const fetchBtn = document.querySelector(" button.Advice-Generator-Btn")


const fetchNewAdvice = async () => {
    try {
        const response = await fetch(API_LINK);
        if (!response.ok) throw new Error('Network response was not ok');
        const advice = await response.json();
        return advice;
    } catch (error) {
        console.error('Fetch error:', error);
    }      
};


const renderAdvice = (adviceObj) =>{
    const {id,advice} =adviceObj;
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    adviceQuoteSlot.textContent = advice;
}


const generateNewAdvice = async () =>{

    const data = await fetchNewAdvice()
    const advice = data.slip;

    renderAdvice(advice)
};

window.addEventListener('DOMContentLoaded',()=>{
    fetchBtn.addEventListener("click",generateNewAdvice)
})