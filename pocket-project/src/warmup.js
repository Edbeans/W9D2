
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const pString = document.createElement('p'); 
    pString.innerText = string; 
    htmlElement.append(pString);
};

htmlGenerator('Party Time.', partyHeader); 