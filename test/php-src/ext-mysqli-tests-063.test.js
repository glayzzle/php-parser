// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/063.phpt
  it("resultset constructor", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $stmt = new mysqli_stmt($mysql, \"SELECT 'foo' FROM DUAL\");\n    $stmt->execute();\n    $stmt->bind_result($foo);\n    $stmt->fetch();\n    $stmt->close();\n    var_dump($foo);\n    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n    try {\n        // an exception should be thrown from prepare (i.e. constructor) not from execute\n        $stmt = new mysqli_stmt($mysql, \"SELECT invalid FROM DUAL\");\n    } catch(mysqli_sql_exception $e) {\n        echo $e->getMessage().\"\\n\";\n    }\n    $mysql->close();\n?>")).toMatchSnapshot();
  });
});
