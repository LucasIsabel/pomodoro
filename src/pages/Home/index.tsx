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
          <TaskInput
            id="task"
            list="task-suggestions"
            type="text"
            name="name"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>
          <label htmlFor="minutesAmount"> durante </label>
          <MinutesInput
            id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={60}
          />
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
