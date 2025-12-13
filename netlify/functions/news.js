export async function handler(event) {
  try {
    const category =
      event.queryStringParameters?.category || "general";

    const baseUrl =
      category === "general"
        ? "https://gnews.io/api/v4/top-headlines"
        : "https://gnews.io/api/v4/search";

    const query =
      category === "general"
        ? `category=general`
        : `q=${encodeURIComponent(category)}`;

    const url = `${baseUrl}?${query}&lang=en&country=in&apikey=${process.env.GNEWS_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
}
