// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_006.phpt
  it("using multiple access modifiers (static methods)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static static function foo() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
