// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_024.phpt
  it("PDO Common: assert that bindParam does not modify parameter", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\nswitch ($db->getAttribute(PDO::ATTR_DRIVER_NAME)) {\n    case 'dblib':\n        // environment settings can influence how the table is created if specifics are missing\n        // https://msdn.microsoft.com/en-us/library/ms174979.aspx#Nullability Rules Within a Table Definition\n        $sql = 'create table test (id int, name varchar(10) null)';\n        break;\n    default:\n        $sql = 'create table test (id int, name varchar(10))';\n        break;\n}\n$db->exec($sql);\n$stmt = $db->prepare('insert into test (id, name) values(0, :name)');\n$name = NULL;\n$before_bind = $name;\n$stmt->bindParam(':name', $name, PDO::PARAM_NULL);\nif ($name !== $before_bind) {\n    echo \"bind: fail\\n\";\n} else {\n    echo \"bind: success\\n\";\n}\nvar_dump($stmt->execute());\nvar_dump($db->query('select name from test where id=0')->fetchColumn());\n?>")).toMatchSnapshot();
  });
});
