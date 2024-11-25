const calcContainer = document.getElementById('calc-container');
const calcOutput = document.getElementById('calc-output');

calcContainer.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        switch (e.target.textContent) {
            case "C":
                clear();
                break;

            case "DEL":
                deleteOneValue();
                break;

            case "=":
                evaluateExpression();
                break;

            default:
                addOutput(e.target.textContent);
                break;
        }
    }
});

function clear() {
    calcOutput.textContent = "";
}

function addOutput(value) {
    calcOutput.textContent += value;
}

function deleteOneValue() {
    calcOutput.textContent = calcOutput.textContent.slice(0, -1);
}

function evaluateExpression() {
    try {
        const result = eval(calcOutput.textContent);
        calcOutput.textContent = result;
    } catch (error) {
        calcOutput.textContent = "Invalid Operation!";
        console.error("Error in calculation:", error);
    }
}
