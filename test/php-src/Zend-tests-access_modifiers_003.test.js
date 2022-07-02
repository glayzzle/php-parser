// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_003.phpt
  it("using multiple access modifiers (classes)", function () {
    expect(parser.parseCode("<?php\nfinal final class test {\n    function foo() {}\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
