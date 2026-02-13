@footer @ui
Feature: Footer
  In order to provide some mandatory information to the user in the footer
  As a user
  I want to see footer mandatory elements and access to the pages and their content

  @linksAndPages
  Scenario: Links and pages content by ui
    Given a user coming to Betclic
    When the user goes to the link in footer
      | item               | linkName                           | expectedDescription                                                                                                 |
      | responsibleGaming  | Jeu responsable                    | La pratique des jeux d’argent est récréative quand elle est avant tout une source de divertissement et d’amusement. |
      | termsAndConditions | Conditions générales d'utilisation | Veuillez trouver ci-après les Conditions Générales et les Règlements des Jeux en vigueur.                           |
    Then the user should see text content in the page
