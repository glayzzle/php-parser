// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug74922.phpt
  it("Bug #74922 (Composed class has fatal error with duplicate, equal const properties)", function () {
    expect(parser.parseCode("<?php\nconst VALUE = true;\ntrait Foo {public $var = VALUE;}\ntrait Bar {public $var = VALUE;}\nclass Baz {use Foo, Bar;}\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
