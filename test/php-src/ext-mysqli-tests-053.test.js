// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/053.phpt
  it("not freed resultset", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /************************\n     * non freed resultset\n     ************************/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $result = mysqli_query($link, \"SELECT CURRENT_USER()\");\n    mysqli_close($link);\n    printf(\"Ok\\n\");\n?>")).toMatchSnapshot();
  });
});
