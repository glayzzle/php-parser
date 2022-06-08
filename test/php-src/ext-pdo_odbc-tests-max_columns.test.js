// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_odbc/tests/max_columns.phpt
  it("PDO ODBC varying character with max/no length", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory('ext/pdo_odbc/tests/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\nif (false === $db->exec('CREATE TABLE TEST (id INT NOT NULL PRIMARY KEY, data varchar(max))')) {\n    if (false === $db->exec('CREATE TABLE TEST (id INT NOT NULL PRIMARY KEY, data longtext)')) {\n        if (false === $db->exec('CREATE TABLE TEST (id INT NOT NULL PRIMARY KEY, data CLOB)')) {\n            die(\"BORK: don't know how to create a long column here:\\n\" . implode(\", \", $db->errorInfo()));\n        }\n    }\n}\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$sizes = array(32, 64, 128, 253, 254, 255, 256, 257, 258, 512, 1024, 2048, 3998, 3999, 4000);\n$db->beginTransaction();\n$insert = $db->prepare('INSERT INTO TEST VALUES (?, ?)');\nforeach ($sizes as $num) {\n    $insert->execute(array($num, str_repeat('i', $num)));\n}\n$insert = null;\n$db->commit();\nforeach ($db->query('SELECT id, data from TEST') as $row) {\n    $expect = str_repeat('i', $row[0]);\n    if (strcmp($expect, $row[1])) {\n        echo \"Failed on size $row[id]:\\n\";\n        printf(\"Expected %d bytes, got %d\\n\", strlen($expect), strlen($row['data']));\n        echo bin2hex($expect) . \"\\n\";\n        echo bin2hex($row['data']) . \"\\n\";\n    }\n}\necho \"Finished\\n\";\n?>")).toMatchSnapshot();
  });
});
