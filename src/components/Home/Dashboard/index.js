import { Display } from "./display";
import { TopCharts } from "./topCharts";

export const Dashboard = () => {
  return (
    <section className="flex flex-col sm:flex-row">
      <Display />
      <TopCharts />
    </section>
  );
};
