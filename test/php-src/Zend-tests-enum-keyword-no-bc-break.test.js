// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/keyword-no-bc-break.phpt
  it("Enum keyword can still be used in classes, namespaces, functions and constants", function () {
    expect(parser.parseCode("<?php\nnamespace enum {\n    class Foo {}\n}\nnamespace foo {\n    class Bar {}\n    class enum extends Bar {}\n}\nnamespace bar {\n    interface Baz {}\n    class enum implements Baz {}\n}\nnamespace {\n    class enum {}\n    function enum() {\n        return 'enum function';\n    }\n    const enum = 'enum constant';\n    var_dump(new enum\\Foo());\n    var_dump(new enum());\n    var_dump(enum());\n    var_dump(enum);\n}\n?>")).toMatchSnapshot();
  });
});
