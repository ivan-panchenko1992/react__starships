const request = (url: string) => fetch(url)
  .then((response) => response.json());

export default request;
