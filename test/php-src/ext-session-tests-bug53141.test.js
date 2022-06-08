// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug53141.phpt
  it("Bug #53141 (autoload misbehaves if called from closing session)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    var_dump(\"Loading $class\");\n    eval('class Bar {}');\n});\nclass Foo\n{\n    function __sleep()\n    {\n        new Bar;\n        return array();\n    }\n}\nsession_start();\n$_SESSION['foo'] = new Foo;\n?>")).toMatchSnapshot();
  });
});
