const createNewText = (color, text, fontSize, height, width, x, y) => {
  let t = `<svg version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         height="${height}" width="${width}"
    >
      <text x="${x}" y="${y}" font-size="${fontSize}" fill="#${color}">${text}</text>
    </svg>`;

  return t;
};

module.exports = (req, res) => {
  const color = req.query.color || "ff0000";
  const text = req.query.text || "";
  const fontSize = req.query.fontSize || "16";
  const height = req.query.height || fontSize;
  const y = req.query.y || fontSize;
  const x = req.query.x || "0";
  const width = req.query.width || "150";

  const txt = createNewText(color, text, fontSize, height, width, x, y);
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(txt);
};
