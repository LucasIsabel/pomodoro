import { useContext, useState, useEffect } from 'react';
import { CountdownContainer, Separator } from './styles';
import { CycleContext } from '../../../../contexts/CycleContext';
import { differenceInSeconds } from 'date-fns';

export function Countdown() {
  const {
    activeCycleId,
    cycles,
    setCycles,
    handleSetActiveCycleId,
    activeTaskName,
  } = useContext(CycleContext);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0);

  const activedCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const currentSeconds = activedCycle
    ? activedCycle?.minutesAmount - amountSecondsPassed
    : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    if (activedCycle) {
      const interval = setInterval(() => {
        const difference = differenceInSeconds(
          new Date(),
          activedCycle.startDate
        );

        if (difference >= currentSeconds) {
          setCycles(cycles, activeCycleId ? activeCycleId : '');

          handleSetActiveCycleId(null);
          clearInterval(interval);
          document.title = 'Pomodoro';
          return;
        } else {
          setAmountSecondsPassed(difference);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [
    activeCycleId,
    currentSeconds,
    activedCycle,
    setCycles,
    cycles,
    handleSetActiveCycleId,
  ]);

  useEffect(() => {
    if (activeCycleId) {
      document.title = `${minutes}:${seconds} - ${activeTaskName}`;
    }
  }, [minutes, seconds, activeCycleId, activeTaskName]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
