import { useQuery } from "@tanstack/react-query";

export function useReverseGeocoding({ lat, lng }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/reversegeocoding?lat=${lat}&lon=${lng}`,
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
    },
  });
  return { data, isLoading, error };
}
