// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_001.phpt
  it("using multiple access modifiers (methods)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static public public static final public final function foo() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
