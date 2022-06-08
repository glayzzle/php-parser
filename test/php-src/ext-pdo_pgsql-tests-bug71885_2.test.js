// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug71885_2.phpt
  it("Request #71855 (PDO placeholder escaping, part 2)", function () {
    expect(parser.parseCode("<?php\nrequire_once dirname(__FILE__) . '/../../../ext/pdo/tests/pdo_test.inc';\nrequire_once dirname(__FILE__) . '/config.inc';\n$db = PDOTest::test_factory(dirname(__FILE__) . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_NUM);\n$jsonb = $db->quote(json_encode(['a' => 1]));\nforeach ([false, true] as $emulate) {\n    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, $emulate);\n    $stmt = $db->prepare(\"SELECT {$jsonb}::jsonb ?? ?\");\n    $stmt->execute(['b']);\n    var_dump($stmt->fetch());\n    $stmt = $db->prepare(\"SELECT {$jsonb}::jsonb ???\");\n    $stmt->execute(['a']);\n    var_dump($stmt->fetch());\n}\n?>\n==OK==")).toMatchSnapshot();
  });
});
