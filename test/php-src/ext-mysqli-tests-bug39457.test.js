// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug39457.phpt
  it("Bug #39457 (Multiple invoked OO connections never close)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = mysqli_init();\n    $mysql->connect($host, $user, $passwd, $db, $port, $socket);\n    $mysql->connect($host, $user, $passwd, $db, $port, $socket);\n    $mysql->close();\n    echo \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
