import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss'


import SideBar from './components/SideBar';
import Authorization from './pages/Authorization';
import Tasks from './pages/Tasks';
import Books from './pages/Books';
import Statistic from './pages/Statistic';
import Focusing from './pages/Focusing';
import { DragDropContext, DropResult} from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from './hooks/reduxhooks';
import { changeStatus } from './redux/slices/tasksSlice';


function App() {
  const dispatch = useAppDispatch();
  const {tasks} = useAppSelector(state=> state.tasks);


  const onDragEnd = (result:DropResult) => {
    const {source, destination,draggableId} = result;
    console.log(result);

    if(!destination) return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;
    const id = draggableId;
    const task = tasks.find(item=> item.id === id);
    dispatch(changeStatus({task, destination, source}))

    }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className={styles.app}>
      <SideBar />
      <Routes>
      <Route path='/authorization' element={<Authorization/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/focus' element={<Focusing/>}/>
        <Route path='/statistic' element={<Statistic/>}/>
        <Route path='/books' element={<Books/>}/>
      </Routes>
    </div>
      </DragDropContext>
  );

}

export default App;
