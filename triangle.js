

function areaCalculation(){
    const base = commonCalculation('triangle-base');
    const height = commonCalculation('triangle-height');
    const area = commonAreaCalculation(base,height);
    showOnsite('triangle-area',area*0.5);   
}
function ellipseArea(){
    const a = commonCalculation('ellipse-base');
    const b = commonCalculation('ellipse-height');
    const ellipseArea = commonAreaCalculation(a,b);
    showOnsite('ellipse-area',ellipseArea*3.1416);
}
function rectangleArea(){
    const a = commonCalculation('rectangle-base');
    const b = commonCalculation('rectangle-height');
    const area = commonAreaCalculation(a,b);
    showOnsite('rectangle-area',area);
}
function parallelogramArea(){
    const a = commonCalculation('parallelogram-base');
    const b = commonCalculation('parallelogram-height');
    const area = commonAreaCalculation(a,b);
    showOnsite('parallelogram-area',area);
}
function pentagonArea(){
    const a = commonCalculation('pentagon-base');
    const b = commonCalculation('pentagon-height');
    const area = commonAreaCalculation(a,b);
    showOnsite('pentagon-area',area*0.5);
}
function rhombusArea(){
    const a = commonCalculation('rhombus-base');
    const b = commonCalculation('rhombus-height');
    const area = commonAreaCalculation(a,b);
    showOnsite('rhombus-area',area*0.5);
}


function commonCalculation(inputFieldId){

    const traingleBase = document.getElementById(inputFieldId);
    const triangleBaseInput = traingleBase.value;
    const inputValue = parseFloat(triangleBaseInput);
    return inputValue;
}

function commonAreaCalculation(num1, num2){
    const areaValue = num1*num2;
    return areaValue;
}
function showOnsite(takeShowPlace,area){
    const areaShowOnSite = document.getElementById(takeShowPlace);
    areaShowOnSite.innerText = area;
}