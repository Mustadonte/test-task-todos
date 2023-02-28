import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => ({
      ...prevState,

      [name]: value,
    }));
  };
  const errorMessage = 'This field is empty';
  const handleSubmit = e => {
    if (e.target.title.value.trim() === '') {
      console.log('empty');
      const title = document.querySelector('#title_error');
      title.innerHTML = errorMessage;
      const input = document.querySelector('#title');
      input.style.borderColor = 'red';
      input.style.outine = 'none';
      e.preventDefault();
      return false;
    }
    if (e.target.description.value.trim() === '') {
      console.log('desc ');
      const title = document.querySelector('#description_error');
      title.innerHTML = errorMessage;
      const input = document.querySelector('#description');
      input.style.borderColor = 'red';
      e.preventDefault();
      return false;
    }
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
