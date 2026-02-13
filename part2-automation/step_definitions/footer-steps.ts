const { footerFragment } = inject();
let state: any = {};

When('the user goes to the {string} footer link for {string}', async (linkName: string, item: string) => {
  await footerFragment.goToFooterLink(item, linkName);
});

Then('the user should see {string} in the {string} page title', async (expectedTitle: string, item: string) => {
  await footerFragment.validatePageTitle(item, expectedTitle);
});
