// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/046.phpt
  it("mysqli_stmt_affected_rows (delete)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_affected\");\n    mysqli_query($link, \"CREATE TABLE test_affected (foo int) ENGINE=\" . $engine);\n    mysqli_query($link, \"INSERT INTO test_affected VALUES (1),(2),(3),(4),(5)\");\n    $stmt = mysqli_prepare($link, \"DELETE FROM test_affected WHERE foo=?\");\n    mysqli_stmt_bind_param($stmt, \"i\", $c1);\n    $c1 = 2;\n    mysqli_stmt_execute($stmt);\n    $x = mysqli_stmt_affected_rows($stmt);\n    mysqli_stmt_close($stmt);\n    var_dump($x==1);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_affected\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
