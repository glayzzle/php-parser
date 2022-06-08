// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug68471.phpt
  it("Bug #68471 (IntlDateFormatter fails for \"GMT+00:00\" timezone)", function () {
    expect(parser.parseCode("<?php\n$formatter = new IntlDateFormatter(\n    'fr_FR',\n    IntlDateFormatter::NONE,\n    IntlDateFormatter::NONE,\n    \"GMT+00:00\"\n);\nvar_dump($formatter);\n?>")).toMatchSnapshot();
  });
});
