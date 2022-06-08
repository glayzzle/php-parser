// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/070.phpt
  it("mysqli ping", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    var_dump($mysql->ping());\n    $mysql->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
