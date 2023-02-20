import { format } from "date-fns"
import { useState } from "react"
import Calendar from "./calendar/Calendar"

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date()) 
  return (
   <div className="mt-16 flex flex-col items-center gap-8">
    <div>
      <p>Selected Date: {format(currentDate, "dd LLLL yyyy")}</p>
    </div>
    <Calendar value={currentDate} onChange={setCurrentDate}/>
    
    </div>
  )
}

export default App
