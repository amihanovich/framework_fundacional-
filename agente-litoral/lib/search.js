export async function webSearch(query, location) {
  const q = location ? `${query} ${location}` : query;
  const url = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(q)}&count=5&search_lang=es&country=AR`;

  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'X-Subscription-Token': process.env.BRAVE_API_KEY
    }
  });

  if (!res.ok) {
    throw new Error(`Brave Search error: ${res.status}`);
  }

  const data = await res.json();
  const results = data.web?.results || [];

  return results.map(r => ({
    title: r.title,
    url: r.url,
    description: r.description
  }));
}
