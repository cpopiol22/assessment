const { I } = inject();

class OfferSearchFragment {
  // locators
  searchInput = "#forms_inputText";
  searchResults = "//sports-search-page";

  noResultIcon = '//div[@class="errorPage_headerImg"]';
  noResultTextTitle =
    '//div[@class="errorPage_content"]//div[contains(@class,"contentTitle")]';
  noResultTextDescription =
    '//div[@class="errorPage_content"]//div[contains(@class,"contentDescription")]';

  // methods

  public async typeInTheSearch(input: string): Promise<void> {
    await I.fillField(this.searchInput, input);
    await I.waitForResponse(
      (response) =>
        response.status() === 200 &&
        response
          .url()
          .includes("https://offer.cdn.begmedia.com/api/pub/v4/events"),
      10
    );
  }

  public async validateNoContent(dataTable: any): Promise<void> {
    const currentTextTitle = await I.grabTextFrom(this.noResultTextTitle);
    const expectedTitle = dataTable.parse().hashes()[0].expectedTitle;
    const currentTextDescription = await I.grabTextFrom(
      this.noResultTextDescription
    );
    const expectedDescription = dataTable
      .parse()
      .hashes()[0].expectedDescription;

    I.assertContain(currentTextTitle, expectedTitle);
    I.assertContain(currentTextDescription, expectedDescription);
  }
}

export = new OfferSearchFragment();
