// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65254.phpt
  it("Bug #65254 (Exception not catchable when exception thrown in autoload with a namespace)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    eval(\"namespace ns_test; class test {}\");\n    throw new \\Exception('abcd');\n});\ntry\n{\n    \\ns_test\\test::go();\n}\ncatch (Exception $e)\n{\n    echo 'caught';\n}\n?>")).toMatchSnapshot();
  });
});
