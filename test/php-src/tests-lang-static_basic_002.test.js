// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/static_basic_002.phpt
  it("Multiple declarations of the same static variable", function () {
    expect(parser.parseCode("<?php\n$a = 5;\nvar_dump($a);\nstatic $a = 10;\nstatic $a = 11;\nvar_dump($a);\nfunction foo() {\n    static $a = 13;\n    static $a = 14;\n    var_dump($a);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
