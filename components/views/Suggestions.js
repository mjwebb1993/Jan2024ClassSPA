import html from "html-literal";

export default state => html`
  <section id="suggestions">
    <div id="restaurants">
      ${state.restaurants
        .map(
          restaurant =>
            html`
              <div class="listing">
                <div class="title">
                  ${restaurant.name}
                </div>
                <div class="address">
                  ${restaurant.location.display_address}
                </div>
              </div>
            `
        )
        .join("")}
    </div>
  </section>
`;
