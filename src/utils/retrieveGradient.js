export default async () => {
  const response = await fetch('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json', {cache: "no-cache"});
  const data = response.ok ? await response.json() : {};
  const randomColor = Math.floor(Math.random() * data.length);
  return {
    from: data[randomColor].colors[0],
    to: data[randomColor].colors[1],
  };
};
