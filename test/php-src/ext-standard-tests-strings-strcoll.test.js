// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strcoll.phpt
  it("Testing Basic behaviour of strcoll()", function () {
    expect(parser.parseCode("<?php\n $a = 'a';\n $b = 'A';\nsetlocale (LC_COLLATE, 'C');\n$result = strcoll($a, $b);\nif($result > 0) {\n    echo \"Pass\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
