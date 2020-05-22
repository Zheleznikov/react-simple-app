import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Персонаж</th>
            <th>Супер-способность</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Чарли</td>
            <td>Не пердит</td>
          </tr>
          <tr>
            <td>Олег</td>
            <td>Пьет и не пьянеет</td>
          </tr>
          <tr>
            <td>Мустафа</td>
            <td>Разводзит продукты пенсионерам</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table