

export const Comentario = ({ item }) => {

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.rating}</td>
      <td>{item.playtime}</td>
      <td>
        <button className="expandButton">Excluir</button>
      </td>
    </tr>
  );
};
