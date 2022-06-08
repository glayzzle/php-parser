// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_005.phpt
  it("PDO Common: PDO::FETCH_CLASS", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(id int NOT NULL PRIMARY KEY, val VARCHAR(10), val2 VARCHAR(10))');\n$db->exec(\"INSERT INTO test VALUES(1, 'A', 'AA')\");\n$db->exec(\"INSERT INTO test VALUES(2, 'B', 'BB')\");\n$db->exec(\"INSERT INTO test VALUES(3, 'C', 'CC')\");\n$stmt = $db->prepare('SELECT id, val, val2 from test');\nclass TestBase\n{\n    public $id;\n    protected $val;\n    private $val2;\n}\nclass TestDerived extends TestBase\n{\n    protected $row;\n    public function __construct(&$row)\n    {\n        echo __METHOD__ . \"($row,{$this->id})\\n\";\n        $this->row = $row++;\n    }\n}\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_CLASS));\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_CLASS, 'TestBase'));\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_CLASS, 'TestDerived', array(0)));\n?>")).toMatchSnapshot();
  });
});
