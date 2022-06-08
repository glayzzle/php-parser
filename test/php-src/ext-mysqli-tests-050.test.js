// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/050.phpt
  it("non freed statement test", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /************************\n     * non freed stamement\n     ************************/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $stmt = mysqli_prepare($link, \"SELECT CURRENT_USER()\");\n    mysqli_stmt_execute($stmt);\n    mysqli_close($link);\n    printf(\"Ok\\n\");\n?>")).toMatchSnapshot();
  });
});
