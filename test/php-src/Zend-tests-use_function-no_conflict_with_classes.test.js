// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/no_conflict_with_classes.phpt
  it("\"use function\" should not conflict with class names", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nclass Bar {}\nuse function bar;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
