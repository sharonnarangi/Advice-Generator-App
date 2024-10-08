const API_LINK = "https://api.adviceslip.com";


const fetchNewAdvice = () => {
     const response = fetch ( API_LINK);
     console.log(response)
};


fetchNewAdvice()