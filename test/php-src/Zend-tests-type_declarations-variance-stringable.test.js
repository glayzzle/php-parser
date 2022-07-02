// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/stringable.phpt
  it("Automatic Stringable implementation participates in variance", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function test(): Stringable {}\n}\nclass Bar extends Foo {\n    public function test(): Bar {}\n    public function __toString() {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
