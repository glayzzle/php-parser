// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug38334.phpt
  it("Bug #38334: Proper data-type support for PDO_SQLITE", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$db->exec('CREATE TABLE test (i INTEGER , f DOUBLE, s VARCHAR(255))');\n$db->exec('INSERT INTO test VALUES (42, 46.7, \"test\")');\nvar_dump($db->query('SELECT * FROM test')->fetch(PDO::FETCH_ASSOC));\n// Check handling of integers larger than 32-bit.\n$db->exec('INSERT INTO test VALUES (10000000000, 0.0, \"\")');\n$i = $db->query('SELECT i FROM test WHERE f = 0.0')->fetchColumn(0);\nif (PHP_INT_SIZE >= 8) {\n    var_dump($i === 10000000000);\n} else {\n    var_dump($i === '10000000000');\n}\n// Check storing of strings into integer/float columns.\n$db->exec('INSERT INTO test VALUES (\"test\", \"test\", \"x\")');\nvar_dump($db->query('SELECT * FROM test WHERE s = \"x\"')->fetch(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
