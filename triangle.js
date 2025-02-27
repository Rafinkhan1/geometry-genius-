function triangleCalculation(){

    const traingleBase = document.getElementById('triangle-base');
    const triangleBaseInput = traingleBase.value;
    const base = parseFloat(triangleBaseInput);
    //console.log(base);

    const traingleHeight = document.getElementById('triangle-height');
    const triangleHeightInput = traingleHeight.value;
    const height = parseFloat(triangleHeightInput);
    //console.log(height);

    const result = 0.5* base*height;

    const triangleAreaShow = document.getElementById('triangle-area');
    triangleAreaShow.innerText = result;
}