// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug62593.phpt
  it("PDO PgSQL Bug #62593 (Emulate prepares behave strangely with PARAM_BOOL)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);\n$errors = array();\n$value = true;\n$query = $db->prepare('SELECT :foo IS FALSE as val_is_false');\n$query->bindValue(':foo', $value, PDO::PARAM_BOOL);\n$query->execute();\n$errors[] = $query->errorInfo();\nvar_dump($value);\n$query->bindValue(':foo', 0, PDO::PARAM_BOOL);\n$query->execute();\n$errors[] = $query->errorInfo();\n// Verify bindParam maintains reference and only passes when execute is called\n$value = true;\n$query->bindParam(':foo', $value, PDO::PARAM_BOOL);\n$value = false;\n$query->execute();\n$errors[] = $query->errorInfo();\nvar_dump($value);\n// Try with strings - Bug #68351\n$value = '0';\n$query->bindParam(':foo', $value, PDO::PARAM_BOOL);\n$query->execute();\n$errors[] = $query->errorInfo();\nvar_dump($query->fetchColumn());\n$value = \"abc\";\n$query->bindParam(':foo', $value, PDO::PARAM_BOOL);\n$query->execute();\n$errors[] = $query->errorInfo();\nvar_dump($query->fetchColumn());\n$expect = 'No errors found';\nforeach ($errors as $error)\n{\n  if (strpos('Invalid text representation', $error[2]) !== false)\n  {\n    $expect = 'Invalid boolean found';\n  }\n}\necho $expect;\n?>")).toMatchSnapshot();
  });
});
