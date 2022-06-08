// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug53782.phpt
  it("PDO MySQL Bug #53782 (foreach throws irrelevant exception)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$conn = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$res = $conn->query('SELECT 0');\ntry {\n    $conn->query('ERROR');\n} catch (PDOException $e) {\n    echo \"Caught: \".$e->getMessage().\"\\n\";\n}\nforeach ($res as $k => $v) {\n    echo \"Value: $v[0]\\n\";\n}\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
