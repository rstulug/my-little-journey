import { useQuery } from "@tanstack/react-query";

const types = [
  "inspirational",
  "knowledge",
  "success",
  "happiness",
  "freedom",
  "friendship",
  "courage",
  "experience",
  "change",
];

export default function useQuote() {
  const randomNum = Math.floor(Math.random() * types.length + 1);
  const { data, error, isLoading } = useQuery({
    queryKey: ["quote"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${types[randomNum]}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "oZQ0KKNoGIa/P/zHjoJncQ==UCwvPw4fmCFGDAy2",
            },
            contentType: "application/json",
          }
        );
        if (!res.ok) throw new Error("Random Quote cannot be accessible");
        const data = await res.json();
        return data;
      } catch (error) {
        throw new Error("Random Quote cannot be accessible");
      }
    },
    staleTime: 1000 * 60 * 10,
  });
  return { data, error, isLoading };
}
