import styles from './App.module.scss'
import { Routes, Route } from 'react-router-dom';

import { DragDropContext, DropResult} from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from './hooks/reduxhooks';
import { changeBookStatus } from './redux/slices/booksSlice';

import SideBar from './components/SideBar';
import Tasks from './pages/Tasks';
import Books from './pages/Books';
import Statistic from './pages/Statistic';



function App() {
  const dispatch = useAppDispatch();
  const {books} = useAppSelector(state=> state.books);


  const onDragEnd = (result:DropResult) => {
    const {source, destination,draggableId} = result;

    if(!destination) return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;
    const id = draggableId;
    const book = books.find(item=> item.id === id);
    dispatch(changeBookStatus({book, destination, source}))
    }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className={styles.app}>
      <SideBar />
      <Routes>
        <Route path='/' element={<Tasks/>}/>
        <Route path='/statistic' element={<Statistic/>}/>
        <Route path='/books' element={<Books/>}/>
      </Routes>
    </div>
      </DragDropContext>
  );

}

export default App;
