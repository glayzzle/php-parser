// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41633_3.phpt
  it("Bug #41633.3 (Crash instantiating classes with self-referencing constants)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const A = Foo::B;\n    const B = Foo::A;\n}\necho Foo::A;\n?>")).toMatchSnapshot();
  });
});
