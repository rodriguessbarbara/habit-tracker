import { HabitDay } from "../components/HabitDay";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();
const minSummaryDatesSize = 18 * 7;
const amountDaysToFill = minSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => {
          return (
            <div
              key={`${day}-${index}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return <HabitDay key={date.toString()} amount={6} completed={Math.round(Math.random() * 5)} />;
        })}

        {amountDaysToFill > 0 &&
          Array.from({ length: amountDaysToFill }).map((_, index) => {
            return (
              <div
                key={index}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}
