const urls = [
  "NM2w_yRoehg", //0-effects
  "xe226V-2wkI", //1-running
  "jVicjMTIPk0", //2-swordplay
  "BxWVIaHdkbo", //3-gunplay
  "N1jSmRW2VlQ", //4-hand to hand fighting
  "o9lT5MshbXI", //5-machine
  "RIXClyhxL5A", //6-samurai champloo
  "RAXMnzBmjso", //7-aircraft
  "TneoJDExtN4", //8-machine 2
  "60b_9aSaNvU", //9-action
  "TPowKIC-Q90", //10-flcl
  "MFIMfpf-SQs", //14-food
  "t4KU2q2HuPY", //15-magical transformation
  "_B6bYr30q1s", //17-liquid
];

const pickUrl = (list) => {
  const num = Math.floor(Math.random() * list.length);
  console.log(`used ${num}`);
  return list[num];
};

const wrap = (url) =>
  `<iframe width="1920" height="1080" src="https://www.youtube-nocookie.com/embed/${url}?controls=0&autoplay=1&cc_load_policy=0&showinfo=0" frameborder="0" allow="fullscreen" allow="autoplay";></iframe>`;
document.querySelector("#video").innerHTML = wrap(pickUrl(urls));
