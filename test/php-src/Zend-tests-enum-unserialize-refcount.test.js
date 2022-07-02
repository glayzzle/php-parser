// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/unserialize-refcount.phpt
  it("Enum unserialize refcount", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\ndebug_zval_dump(Foo::Bar);\n$foo = Foo::Bar;\ndebug_zval_dump($foo);\n$bar = unserialize('E:7:\"Foo:Bar\";');\ndebug_zval_dump($foo);\nunset($bar);\ndebug_zval_dump($foo);\nunset($foo);\ndebug_zval_dump(Foo::Bar);\n?>")).toMatchSnapshot();
  });
});
