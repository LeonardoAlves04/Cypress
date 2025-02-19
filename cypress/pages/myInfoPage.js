class MyInfoPage {
  selectorsList() {
    selectors: {
      firstName: "[name='firstName']";
      middleName: "[name='middleName']";
      lastName: "[name='lastName']";
      genericField: ".oxd-input--active";
      dateCloseButton: ".--close";
      saveButton: "[type='submit']";
      textInput: ".oxd-select-text-input";
      optionsNationality: ".oxd-select-dropdown > :nth-child(10)";
      optionsMarried: ".oxd-select-dropdown > :nth-child(2)";
      selectGender: ".oxd-radio-input";
    }
    return selectors;
  }
}

export default MyInfoPage;
