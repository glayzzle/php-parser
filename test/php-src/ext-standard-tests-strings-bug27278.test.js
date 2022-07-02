// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug27278.phpt
  it("Bug #27278 (*printf() functions treat arguments as if passed by reference)", function () {
    expect(parser.parseCode("<?php\nfunction foo ($a)\n{\n    $a=sprintf(\"%02d\",$a);\n    var_dump($a);\n}\n$x=\"02\";\nvar_dump($x);\nfoo($x);\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
