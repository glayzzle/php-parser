// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug70389.phpt
  it("Bug #70389 (PDO constructor changes unrelated variables)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__. DIRECTORY_SEPARATOR . 'config.inc');\n$flags = [\n    PDO::MYSQL_ATTR_FOUND_ROWS\t=> true,\n    PDO::MYSQL_ATTR_LOCAL_INFILE\t=> true,\n    PDO::ATTR_PERSISTENT \t\t=> true,\n];\n$std = new StdClass();\n$std->flags = $flags;\nnew PDO(PDO_MYSQL_TEST_DSN, PDO_MYSQL_TEST_USER, PDO_MYSQL_TEST_PASS, $flags);\nvar_dump($flags);\n?>")).toMatchSnapshot();
  });
});
