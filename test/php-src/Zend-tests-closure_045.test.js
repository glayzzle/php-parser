// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_045.phpt
  it("Closure 045: Closures created in static methods are not implicitly static", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function foo() {\n        return function () {};\n    }\n}\n$a = A::foo();\n$a->bindTo(new A);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
