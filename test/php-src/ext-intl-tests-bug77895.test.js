// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug77895.phpt
  it("Bug #77895: IntlDateFormatter::create fails in strict mode if $locale = null ", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nvar_dump(IntlDateFormatter::create(null, IntlDateFormatter::NONE, IntlDateFormatter::NONE));\n?>")).toMatchSnapshot();
  });
});
