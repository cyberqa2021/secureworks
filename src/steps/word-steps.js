const {Given, When, Then, AfterAll, After} = require('cucumber');
var assert = require('assert');
var longestWord = require('./../util/helper');


Given(/^User has a file stored in TestData folder$/, async function () {
})

When(/^User reads the file with (.*) chararcter only$/, async function (fileType) {
})

When(/^User is provided "([^"]*)?/, async function (fileType) {
})

Then(/^User is displayed largest and corresponding transposed word for file with "([^"]*)?" character$/, async function (ftype) {  
      switch (ftype) {
        case 'Alphabetic':
          longestWord('TestData/file_letters.txt')
          break;
        case 'Numeric':
          longestWord('TestData/file_numbers.txt')
          break;
        case 'AplphaNumeric':
          longestWord('TestData/file_alphanumeric.txt')
          break;
        case 'Special':
          longestWord('TestData/file_specialchar.txt')
          break;
        case 'AplhaNumericSpecial':
          longestWord('TestData/file_alpha_numeric_specialchar.txt')
          break;
        default:
          console.log( "I don't know such values" );
      }
})

Then(/^User is displayed "([^"]*)?" message$/, async function (ftype) {  
    switch (ftype) {
      case 'Empty':
        longestWord('TestData/file_empty.txt')
        break;
      case 'File type not supported':
        longestWord('TestData/file_empty.doc')
        break;
      case 'File not found':
        longestWord('TestData/file_not_found.doc')
        break;    
      default:
        console.log( "I don't know such values" );
    }
})