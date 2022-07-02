// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76451.phpt
  it("Bug #76451: Aliases during inheritance type checks affected by opcache", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . \"/bug76451.inc\";\nclass A {\n    public function test(Foo $foo) {}\n}\nclass B extends A {\n    public function test(Bar $foo) {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
