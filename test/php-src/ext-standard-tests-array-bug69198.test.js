// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69198.phpt
  it("Bug #69198 (Compact function generate array with length but no content)", function () {
    expect(parser.parseCode("<?php\nif (false) {\n        $willNeverBeDefined = true;\n}\n$result = compact('willNeverBeDefined');\nvar_dump($result, empty($result), $result === array(), empty($willNeverBeDefined));\n?>")).toMatchSnapshot();
  });
});
