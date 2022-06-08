// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_location_get.phpt
  it("timezone_location_get: Test that timezone_location_get returns a correct array of information", function () {
    expect(parser.parseCode("<?php\n$location = timezone_location_get(new DateTimeZone(\"Europe/Oslo\"));\nvar_dump($location);\n?>")).toMatchSnapshot();
  });
});
