const urls = [
  "NM2w_yRoehg", //0-effects
  "xe226V-2wkI", //1-running
  "jVicjMTIPk0", //2-swordplay
  "BxWVIaHdkbo", //3-gunplay
  "N1jSmRW2VlQ", //4-hand to hand fighting
  "o9lT5MshbXI", //5-machine
  "RIXClyhxL5A", //6-samurai champloo
  "-xYqe3kkliA", //7-cowboy bebop
  "0DPcwGLI4iU", //8-food
  "RAXMnzBmjso", //9-aircraft
  "TneoJDExtN4", //10-machine 2 1
  "2RGguJgWWd0", //11-magical transformation
  "412dHswjHJs", //12-falling & flying
  "60b_9aSaNvU", //13-action 1
  "TPowKIC-Q90", //14-flcl
  "jlOyEhJdyoo", //15-liquid
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
  `<iframe width="1920" height="1080" src="https://www.youtube.com/embed/${url}?controls=0autoplay=1&cc_load_policy=1" frameborder="0"; allow="accelerometer; autoplay; encrypted-media; allow="fullscreen";></iframe>`;
document.querySelector("#video").innerHTML = wrap(pickUrl(urls));
