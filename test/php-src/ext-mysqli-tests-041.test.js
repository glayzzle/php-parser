// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/041.phpt
  it("function test: mysqli_warning_count()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_warnings\");\n    mysqli_query($link, \"DROP TABLE IF EXISTS test_warnings\");\n    var_dump(mysqli_warning_count($link));\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
