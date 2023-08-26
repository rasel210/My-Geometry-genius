function calculateTriangleArea (){
  // get triangle base value
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  // get triangle height value
  const heightField = document.getElementById('height-field');
  const heightFieldValue = heightField.value;
  const height = parseFloat(heightFieldValue);
  
  // to get area value
  const areaVlaue = 0.5 * base * height;
  
  // to set show the area value
  const areaSpam = document.getElementById('triangle-area');
  areaSpam.innerText = areaVlaue;
  
}

// calculate rectangle area
function calculateRectangleArea(){
  // get rectangle width value
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  // get rectangle length value
  const lengthField = document.getElementById('length-field');
  const lengthFieldValue = lengthField.value;
  const length = parseFloat(lengthFieldValue);
  
  // to get area value
  const areaVlaue = width * length;
  
  // to set show the area value
  const areaSpam = document.getElementById('rectangle-area');
  areaSpam.innerText = areaVlaue;
  
}

// reuseable function -----> reduce duplicate code
// calculate parallelogram area
function calculateparallelogramArea(){
  const base = getInputValue('parallelogram-base');
  console.log(base);
  const height = getInputValue('parallelogram-height');
  console.log(height)
  const area = base * height;
  setElementInnerText('parallelogram-area', area);

}

// calculate ellipse area
function calculateEllipseArea(){
  const majorRedius = getInputValue('ellipse-major'); 
  const minorRadius = getInputValue('ellipse-minor');
  const area = 3.14 * majorRedius * minorRadius;
  setElementInnerText ('ellipse-area', area);
  
}
// reusanle get input field value in number
function getInputValue (fieldId){
  const inputField = document.getElementById(fieldId);
  const inputvaleText = inputField.value;
  const value = parseFloat(inputvaleText);
  return value;

}

// reusable set span,p,div ect text
function setElementInnerText (elementId, area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// Data validation
/*
*1.set the proper type of the input field. (number, data, email)
*2.check type using typeof
*3.NaN means: not a number. isNaN is checking weather the input is not a number or not
*/ 