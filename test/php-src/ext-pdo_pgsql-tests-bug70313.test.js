// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug70313.phpt
  it("PDO PgSQL Bug #70313 (PDO statement fails to throw exception)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(__DIR__ . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\ntry {\n    $stmt = $db->prepare(\");\");\n    $stmt->execute([1]);\n} catch (PDOException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\ntry {\n    $stmt = $db->prepare(\");\");\n    $stmt->execute([1]);\n} catch (PDOException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
