describe("renders the component App", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get(".container").should("exist");
  });

  it("allows the data missions to be used", () => {
    cy.visit("/");
    cy.get("#site-search").type("Writing on input search");
    cy.findAllByText("106: GPS III SV04 (Sacagawea)").should("exist");
  });

//   it("Routes from missio", () => {
//     cy.visit("/");
//     cy.findAllByText("106: GPS III SV04 (Sacagawea)").click();
//     cy.url().should("include", "mission/4");
//     cy.findByText("106: GPS III SV04 (Sacagawea)").should("exist");
//   });
});
