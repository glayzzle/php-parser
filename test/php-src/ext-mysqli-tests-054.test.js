// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/054.phpt
  it("free resultset after close", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /************************\n     * free resultset after close\n     ************************/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $result1 = mysqli_query($link, \"SELECT CURRENT_USER()\");\n    mysqli_close($link);\n    mysqli_free_result($result1);\n    printf(\"Ok\\n\");\n?>")).toMatchSnapshot();
  });
});
