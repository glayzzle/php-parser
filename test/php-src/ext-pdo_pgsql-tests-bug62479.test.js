// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug62479.phpt
  it("PDO PgSQL Bug #62479 (PDO-psql cannot connect if password contains spaces)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$pdo = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$rand = rand(5, 400);\n$user = \"pdo_test_$rand\";\n$template = \"CREATE USER $user WITH PASSWORD '%s'\";\n$dropUser = \"DROP USER $user\";\n$testQuery = 'SELECT 1 as verification';\n// Create temp user with space in password\n$sql = sprintf($template, 'my password');\n$pdo->query($sql);\n$testConn = new PDO($config['ENV']['PDOTEST_DSN'], $user, \"my password\");\n$result = $testConn->query($testQuery)->fetch();\n$check = $result[0];\nvar_dump($check);\n// Remove the user\n$pdo->query($dropUser);\n// Create a user with a space and single quote\n$sql = sprintf($template, \"my pass''word\");\n$pdo->query($sql);\n$testConn = new PDO($config['ENV']['PDOTEST_DSN'], $user, \"my pass'word\");\n$result = $testConn->query($testQuery)->fetch();\n$check = $result[0];\nvar_dump($check);\n// Remove the user\n$pdo->query($dropUser);\n?>")).toMatchSnapshot();
  });
});
