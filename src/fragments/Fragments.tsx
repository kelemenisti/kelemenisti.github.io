import React from 'react';

function Fragments() {
  return (
    <>
      <div>Fragment child 1</div>
      <div>Fragment child 2</div>
      <div>Fragment child 3</div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </>
  );
}

const Columns = () => {
  return (
    <>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
    </>
  );
};

export default Fragments;
