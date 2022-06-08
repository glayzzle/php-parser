// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug70066.phpt
  it("Bug #70066: Unexpected \"Cannot execute queries while other unbuffered queries\"", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\n$db = $pdo->query('SELECT DATABASE()')->fetchColumn(0);\n// USE is not supported in the prepared statement protocol,\n// so this will fall back to emulation.\n$pdo->query('USE ' . $db);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
