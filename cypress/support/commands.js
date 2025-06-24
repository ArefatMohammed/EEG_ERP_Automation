Cypress.Commands.add("createGorestUser", (userData) => {
  cy.request({
    method: "POST",
    url: "https://gorest.co.in/public/v2/users",
    headers: {
      Authorization: `Bearer ${Cypress.env("GOREST_TOKEN")}`,
      "Content-Type": "application/json",
    },
    body: userData,
  });
});
