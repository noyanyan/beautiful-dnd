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
    {(provided, snapshot) => (
      <div
        className={`mb-2 p-2 border border-solid  rounded transition duration-150 ease-in-out ${
          snapshot.isDragging ? 'bg-green-100' : ''
        }`}
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
