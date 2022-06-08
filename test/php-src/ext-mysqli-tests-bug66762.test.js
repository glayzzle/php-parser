// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug66762.phpt
  it("Bug #66762 \tmysqli@libmysql segfault in mysqli_stmt::bind_result() when link closed", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$mysqli = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    $read_stmt = $mysqli->prepare(\"SELECT 1\");\n    var_dump($read_stmt->bind_result($data));\n    unset($mysqli);\n    var_dump($read_stmt->bind_result($data));\n?>\ndone!")).toMatchSnapshot();
  });
});
