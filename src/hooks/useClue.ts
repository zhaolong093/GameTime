import { useQuery } from "@tanstack/react-query";
import { getClue } from "../lib/api";

export function useClue(id: number) {
  return useQuery({
    queryKey: ["clue", id],
    queryFn: () => getClue(id),
    staleTime: 60_000,
  });
}
