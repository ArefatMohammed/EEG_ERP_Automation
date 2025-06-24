describe("GoRest API Testing - POST Request", () => {
  let testData;

  before(() => {
    // Load fixture data first
    cy.fixture("test_data").then((data) => {
      testData = data;
    });
  });

  it("Should create a new user", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: `Bearer ${testData.token}`,
        "Content-Type": "application/json",
      },
      body: {
        name: testData.user.name,
        email: testData.user.email,
        gender: testData.user.gender,
        status: testData.user.status,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      expect(response.body.name).to.eq(testData.user.name);
      expect(response.body.email).to.eq(testData.user.email);
    });
  });
});
