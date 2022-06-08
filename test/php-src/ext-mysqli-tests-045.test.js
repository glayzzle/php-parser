// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/045.phpt
  it("mysqli_stmt_bind_result (SHOW)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $stmt = mysqli_prepare($link, \"SHOW VARIABLES LIKE 'port'\");\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_bind_result($stmt, $c1, $c2);\n    mysqli_stmt_fetch($stmt);\n    mysqli_stmt_close($stmt);\n    $test = array ($c1,$c2);\n    var_dump($test);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
