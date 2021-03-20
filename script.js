const urls = [
  "NM2w_yRoehg", //0-effects
  "xe226V-2wkI", //1-running
  "jVicjMTIPk0", //2-swordplay
  "BxWVIaHdkbo", //3-gunplay
  "N1jSmRW2VlQ", //4-hand to hand fighting
  "o9lT5MshbXI", //5-machine
  "RIXClyhxL5A", //6-samurai champloo
  "MFIMfpf-SQs", //8-food
  "RAXMnzBmjso", //9-aircraft
  "TneoJDExtN4", //10-machine 2 1
  "t4KU2q2HuPY", //11-magical transformation
  "V40tEMPNPmQ", //12-falling & flying
  "60b_9aSaNvU", //13-action 1
  "TPowKIC-Q90", //14-flcl
  "_B6bYr30q1s", //15-liquid
  "8zqav3M35kM", //16-somebody that i used to know
  "ORvEmKDjIHY", //17-aesthetic
  "AaF7rXatU9E", //18-the girl next door 1
];

const pickUrl = (list) => {
  const num = Math.floor(Math.random() * list.length);
  console.log(`used ${num}`);
  return list[num];
};

const wrap = (url) =>
  `<iframe width="1920" height="1080" src="https://www.youtube-nocookie.com/embed/${url}?autoplay=1&showinfo=0&controls=0&cc_load_policy=0" frameborder="0" allow="fullscreen" allow="autoplay";></iframe>`;
document.querySelector("#video").innerHTML = wrap(pickUrl(urls));