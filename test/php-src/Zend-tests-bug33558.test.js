// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33558.phpt
  it("Bug #33558 (warning with nested calls to functions returning by reference)", function () {
    expect(parser.parseCode("<?php\nfunction & foo() {\n    $var = 'ok';\n    return $var;\n}\nfunction & bar() {\n    return foo();\n}\n$a =& bar();\necho \"$a\\n\";\n?>")).toMatchSnapshot();
  });
});
