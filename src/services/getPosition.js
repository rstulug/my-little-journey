export async function getPosition(position) {
  const { lat, lng } = position;
  console.log(lat, lng);
  try {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/reversegeocoding?lat=${position?.lat}&lon=${position?.lng}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "oZQ0KKNoGIa/P/zHjoJncQ==UCwvPw4fmCFGDAy2",
        },
        contentType: "application/json",
      }
    );
    if (!res.ok) throw new Error("Location cannot be accessible");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Location cannot be accessible");
  }
}
