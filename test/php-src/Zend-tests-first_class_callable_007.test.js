// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_007.phpt
  it("First Class Callable from Special Compiler Function", function () {
    expect(parser.parseCode("<?php\n$strlen = strlen(...);\nif ($strlen(\"Hello World\") === 11) {\n    echo \"OK\";\n}\n?>")).toMatchSnapshot();
  });
});
