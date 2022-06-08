// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/019.phpt
  it("serializing references test case using globals", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass TFoo {\n    public $c;\n    function __construct($c) {\n        $this->c = $c;\n    }\n    function inc() {\n        $this->c++;\n    }\n}\nsession_id(\"test019\");\nsession_start();\n$_SESSION[\"o1\"] = new TFoo(42);\n$_SESSION[\"o2\"] =& $_SESSION[\"o1\"];\nsession_write_close();\nunset($_SESSION[\"o1\"]);\nunset($_SESSION[\"o2\"]);\nsession_start();\nvar_dump($_SESSION);\n$_SESSION[\"o1\"]->inc();\n$_SESSION[\"o2\"]->inc();\nvar_dump($_SESSION);\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
