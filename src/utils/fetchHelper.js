export default async (url, settings = {}) => {
  const response = await fetch(url, settings);
  return response.json();
};
