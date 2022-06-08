// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug60236.phpt
  it("Bug #60236 (TLA timezone dates are not converted properly from timestamp)", function () {
    expect(parser.parseCode("<?php\n$t = new DateTime('2010-07-06 18:38:28 EDT');\n$ts = $t->format('U');\nvar_dump($ts);\n$t->setTimestamp($ts);\nvar_dump($t);\n?>")).toMatchSnapshot();
  });
});
