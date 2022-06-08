// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug33090.phpt
  it("Bug #33090 (mysql_prepare doesn't return an error)", function () {
    expect(parser.parseCode("<?php\n    include (\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, null, $port, $socket);\n    mysqli_select_db($link, $db);\n    if (!($link->prepare(\"this makes no sense\"))) {\n        printf(\"%d\\n\", $link->errno);\n        printf(\"%s\\n\", $link->sqlstate);\n    }\n    $link->close();\n?>")).toMatchSnapshot();
  });
});
