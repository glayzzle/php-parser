// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/064.phpt
  it("NULL binding", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $stmt = new mysqli_stmt($mysql, \"SELECT NULL FROM DUAL\");\n    $stmt->execute();\n    $stmt->bind_result($foo);\n    $stmt->fetch();\n    $stmt->close();\n    $mysql->close();\n    var_dump($foo);\n?>")).toMatchSnapshot();
  });
});
