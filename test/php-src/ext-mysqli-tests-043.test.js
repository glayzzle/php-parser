// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/043.phpt
  it("mysqli_stmt_bind_param (UPDATE)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link,\"DROP TABLE IF EXISTS test_update\");\n    mysqli_query($link,\"CREATE TABLE test_update(a varchar(10),\n        b int) ENGINE=\" . $engine);\n    mysqli_query($link, \"INSERT INTO test_update VALUES ('foo', 2)\");\n    $stmt = mysqli_prepare($link, \"UPDATE test_update SET a=?,b=? WHERE b=?\");\n    mysqli_stmt_bind_param($stmt, \"sii\", $c1, $c2, $c3);\n    $c1 = \"Rasmus\";\n    $c2 = 1;\n    $c3 = 2;\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_close($stmt);\n    $result = mysqli_query($link, \"SELECT concat(a, ' is No. ', b) FROM test_update\");\n    $test = mysqli_fetch_row($result);\n    mysqli_free_result($result);\n    var_dump($test);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_update\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
