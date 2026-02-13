@footer @ui
Feature: Footer
  In order to provide some mandatory information to the user in the footer
  As a user
  I want to see footer mandatory elements and access to the pages and their content

  @linksAndPages
  Scenario Outline: Links and pages content by ui
    Given a user coming to Betclic
    When the user goes to the "<linkName>" footer link for "<item>"
    Then the user should see "<expectedTitle>" in the "<item>" page title

    Examples:
      | item               | linkName                           | expectedTitle                    |
      | responsibleGaming  | Jeu responsable                    | Le guide Betclic du Jeu responsable    |
      | termsAndConditions | Conditions générales d'utilisation | Conditions générales des sites Betclic |
      | privacyPolicy      | Respect de la vie privée           | POLITIQUE VIE PRIVÉE ET COOKIES        |
