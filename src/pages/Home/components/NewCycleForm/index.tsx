import { useFormContext } from 'react-hook-form';
import { TaskInput, MinutesInput, FormContainer } from './styles';

export function NewCycleForm() {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task"> Vou trabalhar em </label>
      <TaskInput
        id="task"
        list="task-suggestions"
        type="text"
        placeholder="Digite o nome de uma tarefa"
        {...register('task')}
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
        min={0}
        max={60}
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true, min: 5 })}
      />
      <span> minutos. </span>
    </FormContainer>
  );
}
