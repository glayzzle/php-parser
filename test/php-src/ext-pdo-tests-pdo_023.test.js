// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_023.phpt
  it("PDO Common: extending PDO", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\nclass PDOStatementX extends PDOStatement\n{\n    public $test1 = 1;\n    protected function __construct()\n    {\n        $this->test2 = 2;\n        $this->test2 = 22;\n        echo __METHOD__ . \"()\\n\";\n    }\n    function __destruct()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n}\nclass PDODatabaseX extends PDO\n{\n    public $test1 = 1;\n    function __destruct()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n    function test()\n    {\n        $this->test2 = 2;\n        var_dump($this->test1);\n        var_dump($this->test2);\n        $this->test2 = 22;\n    }\n    function query($sql, ...$rest): PDOStatement|false\n    {\n        echo __METHOD__ . \"()\\n\";\n        $stmt = parent::prepare($sql, array(PDO::ATTR_STATEMENT_CLASS=>array('PDOStatementx')));\n        $stmt->execute();\n        return $stmt;\n    }\n}\n$db = PDOTest::factory('PDODatabaseX');\n$db->test();\nvar_dump($db);\n$db->query('CREATE TABLE test(id INT NOT NULL PRIMARY KEY, val VARCHAR(10))');\n$db->query('INSERT INTO test VALUES(0, \\'A\\')');\n$db->query('INSERT INTO test VALUES(1, \\'B\\')');\n$stmt = $db->query('SELECT val, id FROM test');\nvar_dump($stmt);\nvar_dump($stmt->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_UNIQUE));\n$stmt = NULL;\n$db = NULL;\n?>")).toMatchSnapshot();
  });
});
