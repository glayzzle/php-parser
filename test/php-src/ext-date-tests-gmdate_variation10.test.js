// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmdate_variation10.phpt
  it("Test gmdate() function : usage variation - Passing Timezone format options to format argument.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmdate() : usage variation ***\\n\";\n// Initialise all required variables\ndate_default_timezone_set('Asia/Calcutta');\n$timestamp = mktime(8, 8, 8, 8, 8, 2008);\necho \"\\n-- Testing gmdate() function with Timezone identifier format --\\n\";\nvar_dump( gmdate('e') );\nvar_dump( gmdate('e', $timestamp) );\necho \"\\n-- Testing gmdate() function with checking whether date is in daylight saving time format --\\n\";\nvar_dump( gmdate('I') );\nvar_dump( gmdate('I', $timestamp) );\necho \"\\n-- Testing gmdate() function with difference to GMT in hours format --\\n\";\nvar_dump( gmdate('O') );\nvar_dump( gmdate('O', $timestamp) );\necho \"\\n-- Testing gmdate() function with Difference to GMT in hours using colon as separator format --\\n\";\nvar_dump( gmdate('P') );\nvar_dump( gmdate('P', $timestamp) );\necho \"\\n-- Testing gmdate() function with timezone abbreviation format --\\n\";\nvar_dump( gmdate('T') );\nvar_dump( gmdate('T', $timestamp) );\necho \"\\n-- Testing gmdate() function with timezone offset format --\\n\";\nvar_dump( gmdate('T') );\nvar_dump( gmdate('T', $timestamp) );\n?>")).toMatchSnapshot();
  });
});
