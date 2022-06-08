// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug24592.phpt
  it("Bug #24592 (crash when multiple NULL values are being stored)", function () {
    expect(parser.parseCode("<?php\n@session_start();\n$foo = $_SESSION['foo'];\n$bar = $_SESSION['bar'];\nvar_dump($foo, $bar, $_SESSION);\n$_SESSION['foo'] = $foo;\n$_SESSION['bar'] = $bar;\nvar_dump($_SESSION);\n?>")).toMatchSnapshot();
  });
});
