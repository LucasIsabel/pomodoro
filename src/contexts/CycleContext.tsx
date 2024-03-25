import { createContext, useState } from 'react';
import { Cycle } from '../pages/Home';
import { NewCycleFormData } from '../pages/Home';

interface CycleContextType {
  activeCycleId: string | null;
  cycles: Cycle[];
  activeTaskName?: string;
  setCycles: (cycles: Cycle[], id: string) => void;
  handleSetActiveCycleId: (id: string | null) => void;
  handleCreateCycle: (data: NewCycleFormData) => void;
  handleStopCycle: () => void;
}

export const CycleContext = createContext({} as CycleContextType);

export function CycleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [activeTaskName, setActiveTaskName] = useState<string>('');

  function handleSetCycles(cycles: Cycle[], id: string) {
    cycles.map((cycle) => {
      if (cycle.id === id) {
        return {
          ...cycle,
          endDate: new Date(),
        };
      }
      return cycle;
    });

    setCycles(cycles);
  }

  function handleSetActiveCycleId(id: string | null) {
    setActiveCycleId(id);
  }

  const handleCreateCycle = (data: NewCycleFormData) => {
    const id = new Date().getTime().toString();

    const cycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    setCycles((state) => [...state, cycle]);
    setActiveCycleId(id);
    setActiveTaskName(data.task);
  };

  function handleStopCycle() {
    setCycles((cycles) =>
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            endDate: new Date(),
          };
        }
        return cycle;
      })
    );

    setActiveCycleId(null);
    document.title = 'Pomodoro';
  }

  return (
    <CycleContext.Provider
      value={{
        activeCycleId,
        cycles,
        setCycles: handleSetCycles,
        handleSetActiveCycleId,
        activeTaskName,
        handleCreateCycle,
        handleStopCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
