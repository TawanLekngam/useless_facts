const factContent = document.querySelector(".fact-content");
const button = document.querySelector("#fact-button");



const getFact = async () => {
    const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
    let content = res.data.text;
    factContent.innerHTML = content;
};

button.addEventListener('click', () => {
    getFact();
});