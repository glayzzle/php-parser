// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/037.phpt
  it("function test: mysqli_field_count()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_result\");\n    mysqli_query($link, \"CREATE TABLE test_result (a int, b varchar(10)) ENGINE = \" . $engine);\n    mysqli_query($link, \"INSERT INTO test_result VALUES (1, 'foo')\");\n    $ir[] = mysqli_field_count($link);\n    mysqli_real_query($link, \"SELECT * FROM test_result\");\n    $ir[] = mysqli_field_count($link);\n    var_dump($ir);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_result\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
