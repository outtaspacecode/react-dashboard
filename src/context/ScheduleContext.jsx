import { useState, createContext } from 'react';

export const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
  const [schedule, setSchedule] = useState({
    todos: [],
    reminders: [],
    events: []
  });

  return (
    <ScheduleContext.Provider value={{schedule, setSchedule}}>
      {children}
    </ScheduleContext.Provider>
  );
}
