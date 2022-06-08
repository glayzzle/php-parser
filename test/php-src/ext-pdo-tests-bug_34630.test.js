// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_34630.phpt
  it("PDO Common: Bug #34630 (inserting streams as LOBs)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$driver = $db->getAttribute(PDO::ATTR_DRIVER_NAME);\n$is_oci = $driver == 'oci';\nif ($is_oci) {\n    $db->exec('CREATE TABLE test (id int NOT NULL PRIMARY KEY, val BLOB)');\n} else {\n    $db->exec('CREATE TABLE test (id int NOT NULL PRIMARY KEY, val VARCHAR(256))');\n}\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$fp = tmpfile();\nfwrite($fp, \"I am the LOB data\");\nrewind($fp);\nif ($is_oci) {\n    /* oracle is a bit different; you need to initiate a transaction otherwise\n     * the empty blob will be committed implicitly when the statement is\n     * executed */\n    $db->beginTransaction();\n    $insert = $db->prepare(\"insert into test (id, val) values (1, EMPTY_BLOB()) RETURNING val INTO :blob\");\n} else {\n    $insert = $db->prepare(\"insert into test (id, val) values (1, :blob)\");\n}\n$insert->bindValue(':blob', $fp, PDO::PARAM_LOB);\n$insert->execute();\n$insert = null;\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\nvar_dump($db->query(\"SELECT * from test\")->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
