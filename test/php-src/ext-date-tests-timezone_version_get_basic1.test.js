// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_version_get_basic1.phpt
  it("timezone_version_get: Test that timezone_location_get returns a date concatenated with a dot and a version number", function () {
    expect(parser.parseCode("<?php $versionTimezone = timezone_version_get();\necho $versionTimezone; ?>")).toMatchSnapshot();
  });
});
