import {startOfMonth, endOfMonth, differenceInDays, sub, format, add, setDate} from "date-fns";
import Cell from "./Cell";

const daysOfWEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]

interface Props {
    value?: Date;
    onChange?: (value: Date) =>void;
}
const Calendar: React.FC<Props> = ({value = new Date(),onChange}) =>{
    //first day of each month
    const startDate = startOfMonth(value)
    //last day of each month
    const endDate = endOfMonth(value)
    // days in a month
    const numDays = differenceInDays(endDate, startDate) +1
    console.log(numDays)
    //What order day will be first of month
    const prefixDays = startDate.getDay()
    //add emnty row for the table
    const suffixDays = 6-endDate.getDay()

    const prevMonth =() => onChange && onChange(sub(value, {months:1}))
    const nextMonth = () =>onChange && onChange(add(value, {months:1}))

    const prevYear = () =>onChange && onChange(add(value, {years:1}))
    const nextYear = () =>onChange && onChange(add(value, {years:1}))

    const handleClickDate = (index: number) => {
        const date = setDate(value, index)
        onChange && onChange(date)
    }
    return <div className="w-[400px] border-t border-l">
                <div className="grid grid-cols-7 items-center justify-center text-center">
               
                    <Cell onClick={prevYear}>{"<<"}</Cell>
                    <Cell onClick={prevMonth}>{format(sub(value, {months:1}), "LLLL")}</Cell>

                    <Cell className="col-span-3">{format(value, "LLLL yyyy")}</Cell>

                    <Cell onClick={nextMonth}>{format(add(value, {months:1}), "LLLL")}</Cell>
                    <Cell onClick={nextYear}>{">>"}</Cell>

                    {daysOfWEEK.map(day => (
                        <Cell key={day} className="text-sm font-bold uppercase">{day}</Cell>
                    ))}

                 {Array.from({length: prefixDays}).map((_, index) =>(
                    <Cell key={index} />
                 ))}

                 {Array.from({length:numDays}).map((_, index) => {
                    const date = index+1
                    const isCurrentDate = date ===value.getDate()
                    return (
                        <Cell isActive = {isCurrentDate} onClick={()=>handleClickDate(date)} key={date}>{date}</Cell>
                    )
                 })}

                {Array.from({length: suffixDays}).map((_, index) =>(
                    <Cell key={index} />
                    ))}    
                  
                </div>
    </div>
}
export default Calendar;