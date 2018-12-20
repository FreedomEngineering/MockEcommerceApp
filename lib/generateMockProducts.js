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
  "Monitor Stand"
];

console.log("products list", products);

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

    const image = "https://via.placeholder.com/200";

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
