// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/039.phpt
  it("function test: mysqli_num_fields() 2", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_real_query($link, \"SHOW VARIABLES\");\n    if (mysqli_field_count($link)) {\n        $result = mysqli_store_result($link);\n        $num = mysqli_num_fields($result);\n        mysqli_free_result($result);\n    }\n    var_dump($num);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
