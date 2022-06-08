// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/cases-refcount.phpt
  it("Enum cases increases refcount", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nfunction callCases() {\n    Foo::cases();\n}\ncallCases();\ndebug_zval_dump(Foo::Bar);\n?>")).toMatchSnapshot();
  });
});
