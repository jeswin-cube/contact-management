import { useQuery } from "../../common";
import { getDailyCovidData } from "./api";

export const useDailyCovidDataQuery = () => {
  return useQuery<[]>({
    queryKey: "dailyCovidData",
    queryFn: async () => await getDailyCovidData().then(),
    options: {
      refetchInterval: 7000,
    },
  });
};
