// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug71885.phpt
  it("Request #71855 (PDO placeholder escaping)", function () {
    expect(parser.parseCode("<?php\nrequire_once dirname(__FILE__) . '/../../../ext/pdo/tests/pdo_test.inc';\nrequire_once dirname(__FILE__) . '/config.inc';\n$db = PDOTest::test_factory(dirname(__FILE__) . '/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_NUM);\nforeach ([false, true] as $emulate) {\n    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, $emulate);\n    try {\n        $stmt = $db->prepare('select ?- lseg \\'((-1,0),(1,0))\\'');\n        $stmt->execute();\n    } catch (PDOException $e) {\n        var_dump('ERR');\n    }\n    $stmt = $db->prepare('select ??- lseg \\'((-1,0),(1,0))\\'');\n    $stmt->execute();\n    var_dump($stmt->fetch());\n}\n?>\n==OK==")).toMatchSnapshot();
  });
});
