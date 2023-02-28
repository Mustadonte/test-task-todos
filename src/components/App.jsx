import { useState } from 'react';
import { TodoForm } from './TodoForm/TodoForm';
import { TodosList } from './TodoList/TodosList';
import { Modal } from './Modal/Modal';
export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const formSubmitHandler = data => {
    setTodoList(prevList => [
      ...prevList,
      { id: todoList.length + 1, status: false, ...data },
    ]);
  };

  const onTableRowClick = data => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const onToggleStatus = id => {
    setTodoList(prevList => {
      return prevList?.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          };
        }
        return todo;
      });
    });
  };

  const close = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TodoForm onSubmit={formSubmitHandler} />
      <TodosList
        todoList={todoList}
        onTableRowClick={onTableRowClick}
        onToggleStatus={onToggleStatus}
      />
      {isModalOpen && (
        <Modal data={modalData} close={close} isOpen={isModalOpen} />
      )}
    </>
  );
};
