// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug79132.phpt
  it("Bug #79132: PDO re-uses parameter values from earlier calls to execute()", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdo = MySQLPDOTest::factory();\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\ntest($pdo);\necho \"\\n\";\n$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);\ntest($pdo);\nfunction test($pdo) {\n    $stmt = $pdo->prepare('select ? a, ? b');\n    $set = [\n        ['a', 'b'],\n        ['x'],      /* second parameter is missing */\n        [1 => 'y'], /* first parameter is missing */\n    ];\n    foreach ($set as $params) {\n        try {\n            var_dump($stmt->execute($params), $stmt->fetchAll(PDO::FETCH_ASSOC));\n        } catch (PDOException $error) {\n            echo $error->getMessage() . \"\\n\";\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
