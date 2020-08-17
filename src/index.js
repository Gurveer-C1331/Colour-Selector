const AColourPicker = require('a-color-picker');
const displayBox = document.getElementById("display-colour");

const hexInput = document.getElementById("hex-input");
const rgb1 = document.getElementById("rgb-input1");
const rgb2 = document.getElementById("rgb-input2");
const rgb3 = document.getElementById("rgb-input3");
//initiize colour value
hexInput.value = "#FFFFFF";
rgb1.value = "255";
rgb2.value = "255";
rgb3.value = "255";

const colourPicker = AColourPicker.createPicker(".picker", { color: "#FFF", showRGB: false, showHEX: false, showHSL: false});
colourPicker.on("change", (picker, color) => {
    displayBox.style.backgroundColor = color; //changes the colour of the colour display
    hexInput.value = picker.color; //places the colour in the hex input field
    //places the colour in the rgb input field
    rgb1.value = AColourPicker.parseColor(picker.color, "rgb")[0];
    rgb2.value = AColourPicker.parseColor(picker.color, "rgb")[1];
    rgb3.value = AColourPicker.parseColor(picker.color, "rgb")[2];
});

hexInput.addEventListener("keyup", function(event) {
    var colour = hexInput.value;
    displayBox.style.backgroundColor = colour;
    colourPicker.setColor(colour, true); //changes the colourPicker's current colour
    //changes the rgb values
    rgb1.value = colourPicker.rgb[0];
    rgb2.value = colourPicker.rgb[1];
    rgb3.value = colourPicker.rgb[2];
});

rgb1.addEventListener("keyup", function(event) {
    var colour = "rgb("+rgb1.value+","+rgb2.value+","+rgb3.value+")";
    displayBox.style.backgroundColor = colour;
    colourPicker.setColor(colour, true);
    hexInput.value = RGBtoHEX(colourPicker.rgb); //changes the hex value
});

rgb2.addEventListener("keyup", function(event) {
    var colour = "rgb("+rgb1.value+","+rgb2.value+","+rgb3.value+")";
    displayBox.style.backgroundColor = colour;
    colourPicker.setColor(colour, true);
    hexInput.value = RGBtoHEX(colourPicker.rgb);
});

rgb3.addEventListener("keyup", function(event) {
    var colour = "rgb("+rgb1.value+","+rgb2.value+","+rgb3.value+")";
    displayBox.style.backgroundColor = colour;
    colourPicker.setColor(colour, true);
    hexInput.value = RGBtoHEX(colourPicker.rgb);
});

function RGBtoHEX(value){
    var r = value[0].toString(16);
    var g = value[1].toString(16);
    var b = value[2].toString(16);

    if(r.length == 1) r = "0"+r;
    if(g.length == 1) g = "0"+g;
    if(b.length == 1) b = "0"+b;

    return "#"+r+g+b;
}