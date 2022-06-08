// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/parent_type_not_interned.phpt
  it("Parent type with interning disabled", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function test(): self {\n    }\n}\nclass Bar extends Foo {\n    public function test(): parent {\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
