import { useContext } from 'react';
import { HistoryContainer, HistoryList, Status } from './styles';
import { CycleContext } from '../../contexts/CycleContext';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function History() {
  const { cycles } = useContext(CycleContext);

  return (
    <HistoryContainer>
      <h1> My History </h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>
                <Status statusColor="yellow"> Concluido </Status>
              </th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount}</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  <Status statusColor="red"> Concluido </Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
