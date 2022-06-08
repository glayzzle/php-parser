// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/056.phpt
  it("extend mysqli", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    class foobar extends mysqli {\n        function test () {\n            return (\"I do not like MySQL 4.1\");\n        }\n    }\n    $foo = new foobar();\n    $foo->connect($host, $user, $passwd, $db, $port, $socket);\n    $foo->close();\n    printf(\"%s\\n\", $foo->test());\n?>")).toMatchSnapshot();
  });
});
