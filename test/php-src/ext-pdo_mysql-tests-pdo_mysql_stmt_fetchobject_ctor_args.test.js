// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_stmt_fetchobject_ctor_args.phpt
  it("MySQL PDO: PDOStatement->fetchObject() with $constructorArgs", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n/** @var PDO $db */\n$db = MySQLPDOTest::factory();\nMySQLPDOTest::createTestTable($db);\n$query = \"SELECT id FROM test ORDER BY id ASC LIMIT 1\";\n$stmt = $db->prepare($query);\nclass Foo {\n    public int $a;\n    public int $id;\n    public function __construct($a) {\n        $this->a = $a;\n    }\n}\nclass Bar {\n    public int $id;\n}\n$stmt->execute();\ntry {\n    $obj = $stmt->fetchObject(Foo::class);\n} catch (ArgumentCountError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$stmt->execute();\ntry {\n    $obj = $stmt->fetchObject(Foo::class, []);\n} catch (ArgumentCountError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$stmt->execute();\n$obj = $stmt->fetchObject(Foo::class, [\"a\" => 123]);\nvar_dump($obj);\n$stmt->execute();\n$obj = $stmt->fetchObject(Bar::class);\nvar_dump($obj);\n$stmt->execute();\n$obj = $stmt->fetchObject(Bar::class, []);\nvar_dump($obj);\ntry {\n    $stmt->execute();\n    $obj = $stmt->fetchObject(Bar::class, [\"a\" => 123]);\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
