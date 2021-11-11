@smoke
Feature: Read word from file
  In order display largest and transposed word from a file
  As a User
  I want to make sure all types of test scenario is covered

  Background: Test data check
    Given User has a file stored in TestData folder

  Scenario Outline: Largest and transposed word - file with "<file_type>" word
    When User reads the file with "<file_type>" chararcter only
    Then User is displayed largest and corresponding transposed word for file with "<file_type>" character
    Examples:
    |file_type          |
    |Alphabetic         |
    |Numeric            |
    |AplphaNumeric      |
    |Special            |
    |AplhaNumericSpecial|

  Scenario Outline: Negative scenario - "<file_type>" 
    When User is provided "<file_type>" 
    Then User is displayed "<file_type>" message
    Examples:
    |file_type                |
    |Empty                    |
    |File type not supported  |
    |File not found           |
