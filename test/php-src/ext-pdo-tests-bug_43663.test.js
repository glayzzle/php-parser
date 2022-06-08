// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_43663.phpt
  it("PDO Common: Bug #43663 (__call on classes derived from PDO)", function () {
    expect(parser.parseCode("<?php\nclass test extends PDO{\n    function __call($name, array $args) {\n        echo \"Called $name in \".__CLASS__.\"\\n\";\n    }\n    function foo() {\n        echo \"Called foo in \".__CLASS__.\"\\n\";\n    }\n}\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$a = new test('sqlite::memory:');\n$a->foo();\n$a->bar();\n?>")).toMatchSnapshot();
  });
});
