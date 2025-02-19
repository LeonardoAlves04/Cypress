class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstName: "[name='firstName']",
      middleName: "[name='middleName']",
      lastName: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateCloseButton: ".--close",
      saveButton: "[type='submit']",
      textInput: ".oxd-select-text-input",
      optionsNationality: ".oxd-select-dropdown > :nth-child(10)",
      optionsMarried: ".oxd-select-dropdown > :nth-child(2)",
      selectGender: ".oxd-radio-input",
    };
    return selectors;
  }

  NameCamp(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstName).clear().type(firstName);
    cy.get(this.selectorsList().middleName).clear().type(middleName);
    cy.get(this.selectorsList().lastName).clear().type(lastName);
  }

  Idcamp(employeeId, otherId, driversLicenseDate, dateSelect) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorsList().genericField)
      .eq(5)
      .clear()
      .type(driversLicenseDate);
    cy.get(this.selectorsList().genericField).eq(6).clear().type(dateSelect);
    cy.get(this.selectorsList().dateCloseButton).click();
  }

  AdditionalInformation(dateSelect) {
    cy.get(this.selectorsList().textInput).eq(0).click();
    cy.get(this.selectorsList().optionsNationality).click();
    cy.get(this.selectorsList().textInput).eq(1).click();
    cy.get(this.selectorsList().optionsMarried).click();
    cy.get(this.selectorsList().genericField).eq(8).clear().type(dateSelect);
    cy.get(this.selectorsList().dateCloseButton).click();
    cy.get(this.selectorsList().selectGender).eq(1).click();
    cy.get(this.selectorsList().saveButton).eq(0).click();
  }

  saveForm() {
    cy.get(this.selectorsList().saveButton).eq(0).click();
    cy.get(".oxd-toast-close");
  }
}

export default MyInfoPage;
