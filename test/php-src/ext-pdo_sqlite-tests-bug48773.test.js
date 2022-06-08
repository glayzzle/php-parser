// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug48773.phpt
  it("Bug #48773 (Incorrect error when setting PDO::ATTR_STATEMENT_CLASS with ctor_args)", function () {
    expect(parser.parseCode("<?php\nclass bar extends PDOStatement {\n    private function __construct() {\n    }\n}\nclass foo extends PDO {\n    public $statementClass = 'bar';\n    function __construct($dsn, $username, $password, $driver_options = array()) {\n        $driver_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;\n        parent::__construct($dsn, $username, $password, $driver_options);\n        $this->setAttribute(PDO::ATTR_STATEMENT_CLASS, array($this->statementClass, array($this)));\n    }\n}\n$db = new foo('sqlite::memory:', '', '');\n$stmt = $db->query('SELECT 1');\nvar_dump($stmt);\n?>")).toMatchSnapshot();
  });
});
