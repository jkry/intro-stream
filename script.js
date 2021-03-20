const urls = [
  "NM2w_yRoehg", //1-effects
  "xe226V-2wkI", //2-running
  "jVicjMTIPk0", //3-swordplay
  "BxWVIaHdkbo", //4-gunplay
  "N1jSmRW2VlQ", //5-hand to hand fighting
  "o9lT5MshbXI", //6-machine
  "RIXClyhxL5A", //7-samurai champloo
  "xYqe3kkliA", //8-cowboy bebop
  "0DPcwGLI4iU", //9-food
  "RAXMnzBmjso", //10-aircraft
  "TneoJDExtN4", //11-machine 2 1
  "2RGguJgWWd0", //12-magical transformation
  "412dHswjHJs", //13-falling & flying
  "60b_9aSaNvU", //14-action 1
  "TPowKIC", //15-flcl
  "jlOyEhJdyoo", //16-liquid
  "8zqav3M35kM", //17-somebody that i used to know
  "ORvEmKDjIHY", //18-aesthetic
  "AaF7rXatU9E", //19-the girl next door 1
];

const pickUrl = (list) => {
  const num = Math.floor(Math.random() * list.length);
  console.log(`used ${num}`);
  return list[num];
};

const wrap = (url) =>
  `<iframe width="1920" height="1080" src="https://www.youtube.com/embed/${url}?controls=0autoplay=1&cc_load_policy=1" frameborder="0"; allow="accelerometer; autoplay; encrypted-media; allow="fullscreen";></iframe>`;
document.querySelector("#video").innerHTML = wrap(pickUrl(urls));
