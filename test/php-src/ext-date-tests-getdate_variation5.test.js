// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/getdate_variation5.phpt
  it("Test getdate() function : usage variation - Verifyig with different timezones on Unix epoch timestamp", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getdate() : usage variation ***\\n\";\n//Timezones with required data for date_sunrise\n$inputs = array (\n        //GMT-11\n        \"Pacific/Samoa\",\n        //GMT-9\n        \"US/Alaska\",\n        //GMT-0\n        \"Africa/Casablanca\",\n        //GMT+4\n        \"Europe/Moscow\",\n        //GMT+8\n        \"Asia/Hong_Kong\",\n        //GMT+10\n        \"Australia/Brisbane\",\n        //GMT+12\n        \"Pacific/Wallis\",\n);\n// loop through each element of the array for timestamp\nforeach($inputs as $timezone) {\n      echo \"\\n--$timezone--\\n\";\n      date_default_timezone_set($timezone);\n      var_dump( getdate(0) );\n};\n?>")).toMatchSnapshot();
  });
});
