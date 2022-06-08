// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/016.phpt
  it("mysqli fetch user variable", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    if (!mysqli_query($link, \"SET @dummy='foobar'\"))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!$stmt = mysqli_prepare($link, \"SELECT @dummy\"))\n        printf(\"[002] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    mysqli_stmt_bind_result($stmt, $dummy);\n    mysqli_stmt_execute($stmt);\n    mysqli_stmt_fetch($stmt);\n    var_dump($dummy);\n    mysqli_stmt_close($stmt);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
