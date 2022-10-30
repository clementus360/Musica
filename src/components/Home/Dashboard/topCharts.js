import { ChartCard } from "./chartCard"

const displayCharts = (charts) => {
  return charts.map((chart) => {
    return (
      <ChartCard key={chart.id} details={chart} />
    );
  });
};

export const TopCharts = ({charts}) => {
  return (
	<section className="flex flex-col gap-2 2xl:gap-6 4xl:gap-8 w-screen sm:h-[26rem] sm:w-max overflow-hidden sm:overflow-y-scroll">
    <h1 className="font-bold text-2xl ml-4 sm:ml-0 2xl:text-3xl 4xl:text-4xl">Top charts</h1>
    <div className="w-screen sm:w-max overflow-x-scroll">
      <div className="flex sm:flex-col gap-4 w-max">
        {displayCharts(charts)}
      </div>
    </div>
  </section>
  )
}
