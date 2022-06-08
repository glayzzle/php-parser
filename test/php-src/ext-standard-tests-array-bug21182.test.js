// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug21182.phpt
  it("Bug #21182 (range modifies arguments)", function () {
    expect(parser.parseCode("<?php\n$a = \"20\"; $b = \"30\";\necho \"a1: $a\\n\";\n$result = range($a, $b);\necho \"a2: $a : type : \" . gettype($a) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
