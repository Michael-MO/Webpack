let inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById("inputValue");
let resultField: HTMLDivElement = <HTMLDivElement> document.getElementById("result");

function ValidateInput(input: HTMLInputElement)
{
    if(Number(input.value).toString() == input.value)
    {        
        return true;
    }
    else
    {
        resultField.innerHTML = "Input må KUN indeholde tal!";
    }
}

function convertToOunces(event: MouseEvent)
{
    if(ValidateInput(inputValue))
    {        
        resultField.innerHTML = (Number(inputValue.value) / 28.34952).toString() + " oz";
    }
}

function convertToGrams(event: MouseEvent)
{
    if(ValidateInput(inputValue))
    {
        resultField.innerHTML = (Number(inputValue.value) * 28.34952).toString() + " g";
    }
}

let buttonToOunces: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonToOunces");
let buttonToGrams: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonToGrams");

buttonToOunces.addEventListener("click", convertToOunces);
buttonToGrams.addEventListener("click", convertToGrams);

// Kilde for omregning:
// https://www.rapidtables.com/convert/weight/gram-to-ounce.html
// https://www.rapidtables.com/convert/weight/ounce-to-gram.html