async function request(url) {
  const response = await fetch(url);
  const result = await response.json();

  return result;
}

export default async (endpoint) => {
  const result = await request(
    `https://jaypegsphoto.ca/wp/wp-json/wp/v2/${endpoint}`
  );

  return result;
};
