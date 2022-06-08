// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_61755.phpt
  it("Bug #61755 (A parsing bug in the prepared statements can lead to access violations)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\necho \"NULL-Byte before first placeholder:\\n\";\n$s = $db->prepare(\"SELECT \\\"a\\0b\\\", ?\");\n$s->bindValue(1,\"c\");\n$s->execute();\n$r = $s->fetch();\necho \"Length of item 0: \".strlen($r[0]).\", Value of item 1: \".$r[1].\"\\n\";\necho \"\\nOpen comment:\\n\";\ntry {\n    $s = $db->prepare(\"SELECT /*\");\n    $s->execute();\n} catch (Exception $e) {\n    echo \"Error code: \".$e->getCode().\"\\n\";\n}\necho \"\\ndone!\\n\";\n?>")).toMatchSnapshot();
  });
});
