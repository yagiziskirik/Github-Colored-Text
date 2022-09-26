const createNewText = (color, text, fontSize) => {
  let t = `<svg version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         width="100" height="50"
    >
      <text font-size="${fontSize}" x="10" y="20">
        <tspan fill="${color}">${text}</tspan>
      </text>
    </svg>`;

  return t;
};

module.exports = (req, res) => {
  if (err) {
    return console.log(err);
  }
  const color = req.query.color || "red";
  const text = req.query.text || "";
  const fontSize = parseInt(req.query.fs) || 16;

  const txt = createNewText(color, text, fontSize);
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(txt);
};
