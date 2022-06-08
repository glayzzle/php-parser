// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug76462.phpt
  it("Bug #76462 Undefined property: DateInterval::$f", function () {
    expect(parser.parseCode("<?php\n$buggy = new DateInterval('P0Y');\n$buggy->f += 0.01;\n$ok = new DateInterval('P0Y');\n$ok->f = $ok->f + 0.01;\nvar_dump($buggy->f);\nvar_dump($ok->f);\n?>")).toMatchSnapshot();
  });
});
