// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_connect_attr.phpt
  it("PDO_MYSQL: check the session_connect_attrs table for connection attributes", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\nif (preg_match('/host=([^;]+)/', PDO_MYSQL_TEST_DSN, $m)) {\n    $host = $m[1];\n}\n//in case $host is empty, do not test for _server_host field\nif (isset($host) && $host !== '') {\n    $stmt = $pdo->query(\"select * from performance_schema.session_connect_attrs where ATTR_NAME='_server_host' and processlist_id = connection_id()\");\n    $row = $stmt->fetch(PDO::FETCH_ASSOC);\n    if (!$row || !isset($row['attr_name'])) {\n        echo \"_server_host missing\\n\";\n    } elseif ($row['attr_value'] !== $host) {\n        printf(\"_server_host mismatch (expected '%s', got '%s')\\n\", $host, $row['attr_value']);\n    }\n}\n$stmt = $pdo->query(\"select * from performance_schema.session_connect_attrs where ATTR_NAME='_client_name' and processlist_id = connection_id()\");\n$row = $stmt->fetch(PDO::FETCH_ASSOC);\nif (!$row || !isset($row['attr_name'])) {\n    echo \"_client_name missing\\n\";\n} elseif ($row['attr_value'] !== 'mysqlnd') {\n    printf(\"_client_name mismatch (expected 'mysqlnd', got '%s')\\n\", $row['attr_value']);\n}\nprintf(\"done!\");\n?>")).toMatchSnapshot();
  });
});
