import css from './TodoList.module.css';
export const TodosList = ({ todoList, onTableRowClick, onToggleStatus }) => {
  return (
    <>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr className={css.tr}>
            <th className={css.th}>ID</th>
            <th className={css.th}>TITLE</th>
            <th className={css.th}>DESCRIPTION</th>
            <th className={css.th}>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {todoList?.map(item => {
            const itemData = {
              id: item.id,
              title: item.title,
              desc: item.description,
              status: item.status,
            };
            return (
              <tr className={css.tr}>
                <td id="id" onClick={() => onTableRowClick(itemData)}>
                  {item.id}
                </td>
                <td id="title" onClick={() => onTableRowClick(itemData)}>
                  {item.title}
                </td>
                <td id="desc" onClick={() => onTableRowClick(itemData)}>
                  {item.description}
                </td>
                <td id="status">
                  <input
                    className={css.checkbox}
                    type="checkbox"
                    checked={item.status}
                    onChange={() => onToggleStatus(item.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
