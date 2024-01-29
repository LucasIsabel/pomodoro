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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const createTaskZodValidationSchema = z.object({
  task: z.string().min(1, { message: 'Task name is required' }),
  minutesAmount: z.number().min(5).max(60, { message: 'Max 60 minutes' }),
  owner: z.string().optional(),
});

type FormDataProps = z.infer<typeof createTaskZodValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<FormDataProps>({
    resolver: zodResolver(createTaskZodValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  const task = watch('task');

  //console.log(formState.errors);

  const isSubmitButtonDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={onSubmit} action="">
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

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitButtonDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
