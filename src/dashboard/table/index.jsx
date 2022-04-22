import React from "react";

export const Table = () => {
  return (
    <section className="content">
     
      <div className="task-list">
      <div className="dash">
        <h4> Tables Example</h4>
      </div>
        <b>Basic Table</b>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="task-list">
        <b >Variants Table</b>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-primary">
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr className="text-warning">
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr className="text-success">
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr className="text-info">
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr className="text-dark">
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr className="text-white">
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr className="text-danger">
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr className="text-muted">
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="task-list">
        <b>Hoverable Table</b>
        <table className="table hoverable">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
