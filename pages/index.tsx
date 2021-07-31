/* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable react/no-access-state-in-setstate */
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
  resetServerContext,
} from 'react-beautiful-dnd';

const initialData = [0, 1, 2, 3, 4];
const initialOrder = [0, 1, 2, 3, 4];

const Index = (): JSX.Element => {
  const [data, usedata] = useState(initialOrder);
  const ondragendHandler: OnDragEndResponder = () => {
    // TODO
  };

  return (
    <DragDropContext onDragEnd={ondragendHandler}>
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided) => (
          // eslint-disable-next-line @typescript-eslint/unbound-method
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>I am a droppable!</h2>
            {data.map((elem, index) => (
              <Draggable
                key={elem.toString()}
                draggableId={`draggable ${elem}`}
                index={index}
              >
                {(draggableProvided) => (
                  <div
                    // eslint-disable-next-line @typescript-eslint/unbound-method
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <h4>My draggable {initialData[elem]}</h4>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  resetServerContext();

  return { props: {} };
};
export default Index;
// // fake data generator
// const getItems = (count: number) =>
//   Array.from({ length: count }, (v, k) => k).map((k) => ({
//     id: `item-${k}`,
//     content: `item ${k}`,
//   }));

// // a little function to help us with reordering the result
// const reorder = <T,>(
//   list: Array<T>,
//   startIndex: number,
//   endIndex: number,
// ): Array<T> => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// const grid = 8;
// type DraggingStyle = {
//   position: 'fixed';
//   top: number;
//   left: number;
//   boxSizing: 'border-box';
//   width: number;
//   height: number;
//   transition: string;
//   transform?: string;
//   zIndex: number;
//   opacity?: number;
//   pointerEvents: 'none';
// };
// const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: 'none',
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,

//   // change background colour if dragging
//   background: isDragging ? 'lightgreen' : 'grey',

//   // styles we need to apply on draggables
//   ...draggableStyle,
// });

// const getListStyle = (isDraggingOver: boolean) => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
//   padding: grid,
//   width: 250,
// });

// class App extends Component {
//   constructor(props: {
//     state: {
//       items: {
//         id: string;
//         content: string;
//       }[];
//     };
//   }) {
//     super(props);
//     this.state = {
//       items: getItems(10),
//     };
//     this.onDragEnd = this.onDragEnd.bind(this);
//   }

//   onDragEnd(result: DropResult) {
//     // dropped outside the list
//     if (!result.destination) {
//       return;
//     }

//     const items = reorder(
//       // eslint-disable-next-line react/no-access-state-in-setstate
//       // eslint-disable-next-line react/destructuring-assignment
//       this.state.items,
//       result.source.index,
//       result.destination.index,
//     );

//     this.setState({
//       items,
//     });
//   }

//   // Normally you would want to split things out into separate components.
//   // But in this example everything is just done in one place for simplicity
//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <Droppable droppableId="droppable">
//           {(provided, snapshot) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               style={getListStyle(snapshot.isDraggingOver)}
//             >
//               {this.state.items.map((item, index) => (
//                 <Draggable key={item.id} draggableId={item.id} index={index}>
//                   {(provided, snapshot) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={getItemStyle(
//                         snapshot.isDragging,
//                         provided.draggableProps.style,
//                       )}
//                     >
//                       {item.content}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     );
//   }
// }

// // Put the thing into the DOM!
// ReactDOM.render(<App />, document.getElementById('root'));
