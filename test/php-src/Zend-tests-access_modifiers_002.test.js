// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_002.phpt
  it("using multiple access modifiers (attributes)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    static public public static final public final $var;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
