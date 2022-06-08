// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_61292.phpt
  it("PDO Common: Bug #61292 (Segfault while calling a method on an overloaded PDO object)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\nclass Database_SQL extends PDO\n{\n    function __construct()\n    {\n                $dsn = getenv('PDOTEST_DSN');\n                $user = getenv('PDOTEST_USER');\n                $pass = getenv('PDOTEST_PASS');\n                if ($user === false) $user = NULL;\n                if ($pass === false) $pass = NULL;\n        $options = array(PDO::ATTR_PERSISTENT => TRUE);\n        parent::__construct($dsn, $user, $pass, $options);\n    }\n    var $bar = array();\n    public function foo()\n    {\n        var_dump($this->bar);\n    }\n}\n(new Database_SQL)->foo();\n?>")).toMatchSnapshot();
  });
});
