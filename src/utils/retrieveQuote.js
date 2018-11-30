export default async () => {
  const response = await fetch('http://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', {cache: "no-cache"});
  const data = response.ok ? await response.json() : {};
  return data;
};
