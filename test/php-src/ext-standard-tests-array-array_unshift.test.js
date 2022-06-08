// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_unshift.phpt
  it("array_unshift() tests", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$s = \"\";\nvar_dump(array_unshift($a, $s));\nvar_dump($a);\nvar_dump(array_unshift($a, $a));\nvar_dump($a);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
