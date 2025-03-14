export async function fetchFeedApi() {
  const url = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

  const request = new Request(url);

  try {
    const response = await fetch(request);
    if (response?.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
}
