import { Draggable } from 'react-beautiful-dnd';

type Props = {
  task: {
    id: string;
    content: string;
  };
  index: number;
};
const Task = ({ task, index }: Props): JSX.Element => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        className="border border-solid p-2 mb-2 transition rounded ease-in-out duration-150 hover:border-gray-500"
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref={provided.innerRef}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...provided.draggableProps}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...provided.dragHandleProps}
      >
        {task.content}
      </div>
    )}
  </Draggable>
);

export default Task;
