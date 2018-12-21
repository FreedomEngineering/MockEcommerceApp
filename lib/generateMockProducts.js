const path = require("path");
const fs = require("fs");

const { v4 } = require("uuid");
const lorem = require("lorem-ipsum");

const products = [
  "HDMI Cable",
  "Speakers",
  "Mouse",
  "Mouse Pad",
  "Power Cord",
  "Monitor Stand",
  "Monitor"
];

console.log("products list", products);

function padZero(str, len) {
  len = len || 2;
  const zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

// https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
function invertColor(hex, bw) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "000000" : "FFFFFF";
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return padZero(r) + padZero(g) + padZero(b);
}

// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const generateAll = () => {
  return products.map(product => {
    console.log("product name", product);

    const price = (Math.random() * 100).toFixed(2);

    const shortDescription = lorem({
      units: "sentences",
      count: Math.ceil(Math.random() * 3)
    });

    const longDescription = lorem({
      units: "paragraphs",
      count: Math.ceil(Math.random() * 4)
    });

    const backgroundColor = getRandomColor();
    const textColor = invertColor(backgroundColor, true);

    const image = `https://via.placeholder.com/200/${backgroundColor}/${textColor}/?text=${product
      .split(" ")
      .join("+")}`;

    return {
      name: product,
      id: v4(),
      price,
      shortDescription,
      longDescription,
      image
    };
  });
};

console.log("generateAll()", generateAll());

const filePath = path.resolve(__dirname, "products.json");
console.log("filePath", filePath);

fs.writeFile(filePath, JSON.stringify(generateAll(), null, 2), err => {
  if (err) {
    console.error("error creating products", err);
    return process.exit(1);
  }

  console.log("products created!");
});
