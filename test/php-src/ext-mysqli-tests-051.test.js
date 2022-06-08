// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/051.phpt
  it("free statement after close", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /************************\n     * free statement after close\n     ************************/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $stmt1 = mysqli_prepare($link, \"SELECT CURRENT_USER()\");\n    mysqli_stmt_execute($stmt1);\n    mysqli_close($link);\n    @mysqli_stmt_close($stmt1);\n    printf(\"Ok\\n\");\n?>")).toMatchSnapshot();
  });
});
