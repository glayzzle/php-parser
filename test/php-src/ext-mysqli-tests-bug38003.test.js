// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug38003.phpt
  it("Bug #38003 (in classes inherited from MySQLi it's possible to call private constructors from invalid context)", function () {
    expect(parser.parseCode("<?php\nclass DB extends mysqli {\n    private function __construct($hostname, $username, $password, $database) {\n        var_dump(\"DB::__construct() called\");\n    }\n}\n$DB = new DB();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
