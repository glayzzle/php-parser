// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug66141.phpt
  it("Bug #66141 (mysqlnd quote function is wrong with NO_BACKSLASH_ESCAPES after failed query)", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc';\n$db = MySQLPDOTest::factory();\n$input = 'Something\\', 1 as one, 2 as two  FROM dual; -- f';\n$quotedInput0 = $db->quote($input);\n$db->query('set session sql_mode=\"NO_BACKSLASH_ESCAPES\"');\n// injection text from some user input\n$quotedInput1 = $db->quote($input);\n$db->query('something that throws an exception');\n$quotedInput2 = $db->quote($input);\nvar_dump($quotedInput0);\nvar_dump($quotedInput1);\nvar_dump($quotedInput2);\n?>\ndone")).toMatchSnapshot();
  });
});
