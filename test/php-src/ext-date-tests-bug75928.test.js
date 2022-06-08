// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug75928.phpt
  it("Bug #75928: Argument 2 for `DateTimeZone::listIdentifiers()` should accept `null`", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nvar_dump(is_array(DateTimeZone::listIdentifiers(\\DateTimeZone::ALL, null)));\n?>")).toMatchSnapshot();
  });
});
