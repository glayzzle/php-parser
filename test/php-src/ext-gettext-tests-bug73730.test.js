// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/bug73730.phpt
  it("Bug #73730 (textdomain(null) throws in strict mode)", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nvar_dump(textdomain(null));\n?>")).toMatchSnapshot();
  });
});
