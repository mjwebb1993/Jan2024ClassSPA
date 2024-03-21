import html from "html-literal";

export default state => html`
  <section id="holidays">
    <ul>
      ${state.holidays
        .map(
          holiday =>
            html`
              <li>${holiday.name} - ${holiday.date.iso}</li>
            `
        )
        .join("")}
    </ul>
  </section>
`;
