// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/052.phpt
  it("call statement after close", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /************************\n     * statement call  after close\n     ************************/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $stmt2 = mysqli_prepare($link, \"SELECT CURRENT_USER()\");\n    mysqli_close($link);\n    @mysqli_stmt_execute($stmt2);\n    @mysqli_stmt_close($stmt2);\n    printf(\"Ok\\n\");\n?>")).toMatchSnapshot();
  });
});
