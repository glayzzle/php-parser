// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/062.phpt
  it("resultset constructor", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $mysql->real_query(\"SELECT 'foo' FROM DUAL\");\n    $myresult = new mysqli_result($mysql);\n    $row = $myresult->fetch_row();\n    $myresult->close();\n    $mysql->close();\n    var_dump($row);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
