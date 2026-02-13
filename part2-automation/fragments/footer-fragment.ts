const { I, homePage, termsAndConditionsPage, responsibleGamingPage } = inject();

class FooterFragment {
  // locators

  // methods

  public async goToFooterLink(dataTable: any, state: any): Promise<void> {
    let i = 0;
    while (dataTable.parse().hashes()[i] != undefined) {
      state["expectedDescription" + i] = dataTable.parse().hashes()[
        i
      ].expectedDescription;
      let buttonLocatorFromGherkin = eval(
        `${dataTable.parse().hashes()[i].item}Page.${
          dataTable.parse().hashes()[i].item
        }Button`
      );
      let pageContentLocatorFromGherkin = eval(
        `${dataTable.parse().hashes()[i].item}Page.pageContent`
      );
      await I.scrollTo(buttonLocatorFromGherkin);
      await I.click(dataTable.parse().hashes()[i].linkName);
      await I.waitForElement(pageContentLocatorFromGherkin, 10);
      state["currentDescription" + i] = await I.grabTextFrom(
        pageContentLocatorFromGherkin
      );
      await homePage.goToMainPage();
      i++;
    }
  }

  public validateContent(state: any, current: string, expected: string): void {
    let i = 0;
    while (state[current + i] != undefined) {
      I.assertEqual(
        state[current + i].replace(/\n/g, " ").replace(/ +/g, " ").trim(),
        state[expected + i]
      );
      i++;
    }
  }
}

export = new FooterFragment();
