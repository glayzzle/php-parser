// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/031.phpt
  it("function test: mysqli_error", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $error = mysqli_error($link);\n    var_dump($error);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"SELECT * FROM non_exisiting_table\");\n    $error = mysqli_error($link);\n    var_dump($error);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
