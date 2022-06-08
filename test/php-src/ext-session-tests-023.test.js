// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/023.phpt
  it("session object deserialization", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass foo {\n    public $bar = \"ok\";\n    function method() { $this->yes++; }\n}\nsession_id(\"test023\");\nsession_start();\nsession_decode('baz|O:3:\"foo\":2:{s:3:\"bar\";s:2:\"ok\";s:3:\"yes\";i:1;}arr|a:1:{i:3;O:3:\"foo\":2:{s:3:\"bar\";s:2:\"ok\";s:3:\"yes\";i:1;}}');\n$baz = $_SESSION['baz'];\n$arr = $_SESSION['arr'];\n$baz->method();\n$arr[3]->method();\nvar_dump($baz);\nvar_dump($arr);\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
