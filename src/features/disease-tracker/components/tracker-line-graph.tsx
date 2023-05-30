import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, Tooltip, YAxis } from "recharts";
import { useDailyCovidDataQuery } from "../queries";

export const TrackerLineGraph = () => {
  const { data, isLoading } = useDailyCovidDataQuery();

  return (
    <>
      {!!data || isLoading ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dataKey" />
            <Tooltip />
            <Line type="monotone" dataKey="cases" stroke="#8884d8" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Charts is being Loaded....</p>
      )}
    </>
  );
};
