// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/017.phpt
  it("mysqli fetch functions", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    if (!$stmt = mysqli_prepare($link, \"SELECT md5('bar'), database(), 'foo'\"))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    mysqli_stmt_bind_result($stmt, $c0, $c1, $c2);\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_fetch($stmt);\n    mysqli_stmt_close($stmt);\n    $test = array($c0, $c1, $c2);\n    if ($c1 !== $db) {\n        echo \"Different data\\n\";\n    }\n    var_dump($test);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
