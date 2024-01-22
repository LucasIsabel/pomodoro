import {
  HomeContainer,
  CountdownContainer,
  FormContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesInput,
} from './styles';
import { Play } from '@phosphor-icons/react';

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em </label>
          <TaskInput id="task" type="text" name="name" />
          <label htmlFor="minutesAmount"> durante </label>
          <MinutesInput id="minutesAmount" type="number" />
          <span> minutos. </span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
