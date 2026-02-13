const { I, responsibleGamingPage, termsAndConditionsPage, privacyPolicyPage } = inject();

class FooterFragment {
  // locators

  private pages: Record<string, any> = {
    responsibleGaming: responsibleGamingPage,
    termsAndConditions: termsAndConditionsPage,
    privacyPolicy: privacyPolicyPage,
  };

  // methods

  public async goToFooterLink(item: string, linkName: string): Promise<void> {
    const page = this.pages[item];
    await I.scrollTo(page.link);
    await I.click(linkName);
    await I.waitForElement(page.pageContent, 10);
  }

  public async validatePageTitle(item: string, expectedTitle: string): Promise<void> {
    const page = this.pages[item];
    const currentText = await I.grabTextFrom(page.pageContent);
    const normalizedText = (currentText as string).replace(/\n/g, ' ').replace(/ +/g, ' ').trim();
    I.assertContain(normalizedText, expectedTitle);
  }
}

export = new FooterFragment();
