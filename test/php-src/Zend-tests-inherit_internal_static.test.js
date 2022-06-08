// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/inherit_internal_static.phpt
  it("Inherit internal static property into userland class", function () {
    expect(parser.parseCode("<?php\nclass Test extends _ZendTestClass {\n}\nvar_dump(Test::$_StaticProp);\n_ZendTestClass::$_StaticProp = 42;\nvar_dump(Test::$_StaticProp);\n?>")).toMatchSnapshot();
  });
});
