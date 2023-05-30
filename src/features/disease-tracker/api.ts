import { get } from "../../common";
import { postProcess } from "../../common/api/post-process";

export type GetDailyCovidDataResponse = {
  cases: {
    [key: string]: number;
  };
  deaths: {
    [key: string]: number;
  };
  recovered: {
    [key: string]: number;
  };
};

export const getDailyCovidData = async () => {
  return await get<GetDailyCovidDataResponse, {}>("/historical/all?lastdays=all")
    .then(postProcess)
    .then((res) => {
      return Object.keys(res.cases).map((key: string) => {
        return {
          dataKey: key,
          cases: res.cases[key],
          deaths: res.deaths[key],
          recovered: res.recovered[key],
        };
      });
    });
};
