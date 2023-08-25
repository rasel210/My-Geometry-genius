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