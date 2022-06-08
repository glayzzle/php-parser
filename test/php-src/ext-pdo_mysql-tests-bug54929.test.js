// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug54929.phpt
  it("Bug #54929 (Parse error with single quote in sql comment (pdo-mysql))", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$pdodb = PDOTest::test_factory(__DIR__ . '/common.phpt');\nfunction testQuery($query) {\n    global $pdodb;\n    $stmt = $pdodb->prepare($query);\n    if (!$stmt->execute(array(\"foo\"))) {\n        var_dump($stmt->errorInfo());\n    } else{\n        var_dump($stmt->fetch(PDO::FETCH_ASSOC));\n    }\n}\ntestQuery(\"/* ' */ select ? as f1 /* ' */\");\ntestQuery(\"/* '-- */ select ? as f1 /* *' */\");\ntestQuery(\"/* ' */ select ? as f1 --';\");\ntestQuery(\"/* ' */ select ? as f1 -- 'a;\");\ntestQuery(\"/*'**/ select ? as f1 /* ' */\");\ntestQuery(\"/*'***/ select ? as f1 /* ' */\");\ntestQuery(\"/*'**a ***b / ****\n******\n**/ select ? as f1 /* ' */\");\n?>")).toMatchSnapshot();
  });
});
