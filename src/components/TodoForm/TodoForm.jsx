import useForm from 'components/hooks/useForm';
import css from './TodoFrom.module.css';

export const TodoForm = ({ onSubmit }) => {
  const initialState = {
    title: '',
    description: '',
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          value={state.title}
          onChange={handleChange}
        />
        <p id="title_error" className={css.title_error}></p>
      </label>
      <label className={css.label} htmlFor="description">
        Description
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Enter descripion"
          value={state.description}
          onChange={handleChange}
        />
        <p id="description_error" className={css.description_error}></p>
      </label>
      <button className={css.button} type="submit">
        Create
      </button>
    </form>
  );
};
