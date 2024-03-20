import html from "html-literal";

export default state => html`
  <section id="pizza">
    <div class="filter">
      <select name="column" id="column">
        <option value="">Select a column</option>
        <option value="crust">Crust</option>
        <option value="cheese">Cheese</option>
        <option value="sauce">Sauce</option>
        <option value="toppings">Toppings</option>
        <option value="customer">Customer</option>
      </select>
      <input type="search" name="filter" id="filter" />
      <button id="search-button">Search</button>
    </div>
    <table id="pizzas">
      <tr>
        <th>Crust</th>
        <th>Cheese</th>
        <th>Sauce</th>
        <th>Toppings</th>
        <th>Customer</th>
        <th>Actions</th>
      </tr>
      ${state.pizzas
        .map((pizza, index) => {
          return html`
            <tr id="${pizza._id}">
              <td>${pizza.crust}</td>
              <td>${pizza.cheese}</td>
              <td>${pizza.sauce}</td>
              <td>${pizza.toppings.join(" & ")}</td>
              <td>${pizza.customer}</td>
              <td>
                <button
                  class="delete"
                  data-id="${pizza._id}"
                  data-index="${index}"
                >
                  Delete
                </button>
              </td>
            </tr>
          `;
        })
        .join("")}
    </table>
  </section>
`;
