const createNewText = (color, text, fontSize) => {
  let t = `<svg version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <text font-size="${fontSize}" fill="#${color}">${text}</text>
    </svg>`;

  return t;
};

module.exports = (req, res) => {
  const color = req.query.color || "ff0000";
  const text = req.query.text || "";
  const fontSize = parseInt(req.query.fs) || 16;

  const txt = createNewText(color, text, fontSize);
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(txt);
};
