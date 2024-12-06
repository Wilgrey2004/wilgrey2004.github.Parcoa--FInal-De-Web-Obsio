describe("Página principal", () => {
  it("Carga correctamente", () => {
    cy.visit(
      "https://wilgrey2004.github.io/wilgrey2004.github.Parcoa-FInal-De-Web-Obsio/"
    );
    cy.get("h1").should("contain", "Hola mundo!!!");
  });
});
