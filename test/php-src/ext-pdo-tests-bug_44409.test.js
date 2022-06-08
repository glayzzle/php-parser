// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_44409.phpt
  it("PDO Common: Bug #44409 (PDO::FETCH_SERIALIZE calls __construct())", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (dat varchar(100))\");\n$db->exec(\"INSERT INTO test (dat) VALUES ('Data from DB')\");\nclass bug44409 implements Serializable\n{\n    public function __construct()\n    {\n        printf(\"Method called: %s()\\n\", __METHOD__);\n    }\n    public function serialize()\n    {\n        return \"any data from serizalize()\";\n    }\n    public function unserialize($dat)\n    {\n        printf(\"Method called: %s(%s)\\n\", __METHOD__, var_export($dat, true));\n    }\n}\n$stmt = $db->query(\"SELECT * FROM test\");\nprint_r($stmt->fetchAll(PDO::FETCH_CLASS|PDO::FETCH_SERIALIZE, \"bug44409\"));\n?>")).toMatchSnapshot();
  });
});
