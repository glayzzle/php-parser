// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43183.phpt
  it("Bug #43183 (\"use\" of the same class in difference scripts results in a fatal error)", function () {
    expect(parser.parseCode("<?php\nnamespace Test;\nuse Test\\Foo;\nclass Foo {}\nclass Bar {}\nuse Test\\Bar;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
