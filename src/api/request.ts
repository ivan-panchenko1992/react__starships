const request = (url: string) => fetch(url)
  .then((response) => response.json())
  .then((result) => result.results);

export default request;
