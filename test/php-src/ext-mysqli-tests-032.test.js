// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/032.phpt
  it("function test: mysqli_info", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"DROP TABLE IF EXISTS general_test\");\n    mysqli_query($link, \"CREATE TABLE general_test (a INT)\");\n    mysqli_query($link, \"INSERT INTO general_test VALUES (1),(2),(3)\");\n    $afc = mysqli_info($link);\n    var_dump($afc);\n    mysqli_query($link, \"DROP TABLE IF EXISTS general_test\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
