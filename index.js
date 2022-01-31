const ourVision = [
  "B$u$i$ld",
  "$t$$h$e",
  "N$e$x$t",
  "E$$ra",
  "$$o$f$",
  "S$$of$t$wa$r$e",
  "De$$ve$l$op$me$n$t",
];

let string = "";
ourVision.forEach((item, key) => {
  string += item.replace(/[$]/g, "");
  if (key !== 7) string += " ";
});

console.log(string);
