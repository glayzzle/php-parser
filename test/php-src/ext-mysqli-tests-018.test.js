// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/018.phpt
  it("mysqli fetch system variables", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    if (!mysqli_query($link, \"SET AUTOCOMMIT=0\"))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!$stmt = mysqli_prepare($link, \"SELECT @@autocommit\"))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    mysqli_stmt_bind_result($stmt, $c0);\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_fetch($stmt);\n    var_dump($c0);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
