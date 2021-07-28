import Task from 'Task';
import { Droppable } from 'react-beautiful-dnd';

type Props = {
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  tasks: {
    id: string;
    content: string;
  }[];
};
const Column = ({ column, tasks }: Props): JSX.Element => {
  const { title } = column;
  type TitleProps = {
    children: string;
  };
  const Title = ({ children }: TitleProps) => (
    <h3 className="p-2 underline">{children}</h3>
  );

  type ContainerProps = { children: JSX.Element[] };
  const Container = ({ children }: ContainerProps) => (
    <div className="m-2 border border-gray-300 rounded-sm">{children}</div>
  );

  return (
    <Container>
      <Title>{title}</Title>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="p-2"
            // eslint-disable-next-line @typescript-eslint/unbound-method
            ref={provided.innerRef}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
};
export default Column;
