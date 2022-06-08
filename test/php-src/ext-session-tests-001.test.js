// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/001.phpt
  it("session object serialization", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass foo {\n    public $bar = \"ok\";\n    function method() { $this->yes = \"done\"; }\n}\n$baz = new foo;\n$baz->method();\n$arr[3] = new foo;\n$arr[3]->method();\nsession_start();\n$_SESSION[\"baz\"] = $baz;\n$_SESSION[\"arr\"] = $arr;\nprint session_encode().\"\\n\";\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
