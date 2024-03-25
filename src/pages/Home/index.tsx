import { HomeContainer, StartCountdownButton } from './styles';
import { Play } from '@phosphor-icons/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Countdown } from './components/Countdown';
import { NewCycleForm } from './components/NewCycleForm';
import { useContext } from 'react';
import { CycleContext } from '../../contexts/CycleContext';

const createTaskZodValidationSchema = z.object({
  task: z.string().min(1, { message: 'Task name is required' }),
  minutesAmount: z.number().min(5).max(60, { message: 'Max 60 minutes' }),
  endDate: z.date().optional(),
});

export type NewCycleFormData = z.infer<typeof createTaskZodValidationSchema>;

export type Cycle = {
  id: string;
  startDate: Date;
} & NewCycleFormData;

export function Home() {
  const { handleCreateCycle, activeCycleId, handleStopCycle } =
    useContext(CycleContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(createTaskZodValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  const { watch, handleSubmit, reset } = newCycleForm;

  const task = watch('task');

  const isSubmitButtonDisabled = !task;

  function handleCreateNewCycle(data: NewCycleFormData) {
    handleCreateCycle(data);
    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycleId ? (
          <StartCountdownButton
            isActive={true}
            onClick={handleStopCycle}
            type="button"
          >
            <Play size={24} />
            Parar
          </StartCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitButtonDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
