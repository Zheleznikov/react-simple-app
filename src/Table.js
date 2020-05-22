import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Герой</th>
        <th>Супер-сила</th>
        <th>Удалить</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.power}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>удалить</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
