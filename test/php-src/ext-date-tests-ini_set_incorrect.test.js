// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/ini_set_incorrect.phpt
  it("Test invalid time zone passed to ini_set", function () {
    expect(parser.parseCode("<?php\nini_set(\"date.timezone\", \"Incorrect/Zone\");\n?>")).toMatchSnapshot();
  });
});
