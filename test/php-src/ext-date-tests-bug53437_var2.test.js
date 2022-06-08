// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug53437_var2.phpt
  it("Bug #53437 DateInterval basic serialization", function () {
    expect(parser.parseCode("<?php\n$di0 = new DateInterval('P2Y4DT6H8M');\n$s = serialize($di0);\n$di1 = unserialize($s);\nvar_dump($di0, $di1);\n?>")).toMatchSnapshot();
  });
});
