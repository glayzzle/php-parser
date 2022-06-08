// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63219.phpt
  it("Bug #63219 (Segfault when aliasing trait method when autoloader throws excpetion)", function () {
    expect(parser.parseCode("<?php\ntrait TFoo {\n    public function fooMethod(){}\n}\nclass C {\n    use TFoo {\n        Typo::fooMethod as tf;\n    }\n}\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
