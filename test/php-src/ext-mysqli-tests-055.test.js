// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/055.phpt
  it("free nothing", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /************************\n     * don't free anything\n     ************************/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $result2 = mysqli_query($link, \"SELECT CURRENT_USER()\");\n    $stmt2 = mysqli_prepare($link, \"SELECT CURRENT_USER()\");\n    printf(\"Ok\\n\");\n?>")).toMatchSnapshot();
  });
});
