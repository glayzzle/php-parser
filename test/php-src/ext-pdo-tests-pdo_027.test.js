// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_027.phpt
  it("PDO Common: PDO::FETCH_LAZY", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('create table test (id int, name varchar(10))');\n$db->exec(\"INSERT INTO test (id,name) VALUES(1,'test1')\");\n$db->exec(\"INSERT INTO test (id,name) VALUES(2,'test2')\");\nforeach ($db->query(\"SELECT * FROM test\", PDO::FETCH_LAZY) as $v) {\n    echo \"lazy: \" . $v->id.$v->name.\"\\n\";\n}\necho \"End\\n\";\n?>")).toMatchSnapshot();
  });
});
