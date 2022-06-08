// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/049.phpt
  it("mysql_fetch_row (OO-Style)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $mysql = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $mysql->select_db($db);\n    $result = $mysql->query(\"SELECT DATABASE()\");\n    $row = $result->fetch_row();\n    $result->close();\n    var_dump($row);\n    if ($row[0] != $db)\n        printf(\"[001] Expecting '%s' got '%s'\\n\", $db, $row[0]);\n    $mysql->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
