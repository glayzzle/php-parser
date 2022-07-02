// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug7515.phpt
  it("Bug #7515 (weird & invisible referencing of objects)", function () {
    expect(parser.parseCode("<?php\nclass obj {\n    function method() {}\n}\n$o = new stdClass;\n$o->root = new obj();\nob_start();\nvar_dump($o);\n$x=ob_get_contents();\nob_end_clean();\n$o->root->method();\nob_start();\nvar_dump($o);\n$y=ob_get_contents();\nob_end_clean();\nif ($x == $y) {\n    print \"success\";\n} else {\n    print \"failure\nx=$x\ny=$y\n\";\n}\n?>")).toMatchSnapshot();
  });
});
