// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug66033.phpt
  it("Bug #66033 (Segmentation Fault when constructor of PDO statement throws an exception)", function () {
    expect(parser.parseCode("<?php\nclass DBStatement extends PDOStatement {\n    public $dbh;\n    protected function __construct($dbh) {\n        $this->dbh = $dbh;\n        throw new Exception(\"Blah\");\n    }\n}\n$pdo = new PDO('sqlite::memory:', null, null);\n$pdo->setAttribute(PDO::ATTR_STATEMENT_CLASS, array('DBStatement',\n    array($pdo)));\n$pdo->exec(\"CREATE TABLE IF NOT EXISTS messages (\n    id INTEGER PRIMARY KEY,\n    title TEXT,\n    message TEXT,\n    time INTEGER)\");\ntry {\n    $pdoStatement = $pdo->query(\"select * from messages\");\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
