// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/026.phpt
  it("correct instantiation of references between variables in sessions", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nob_start();\nsession_id(\"test026\");\nsession_start();\nclass a {\n    public $test = \"hallo\";\n}\nclass b {\n    public $a;\n    function __construct(&$a) {\n        $this->a = &$a;\n    }\n}\n$a = new a();\n$b = new b($a);\necho \"original values:\\n\";\nvar_dump($a,$b);\n$_SESSION['a'] = $a;\n$_SESSION['b'] = $b;\nsession_write_close();\nunset($_SESSION['a']);\nunset($_SESSION['b']);\nsession_start();\n$a = $_SESSION['a'];\n$b = $_SESSION['b'];\necho \"values after session:\\n\";\nvar_dump($a,$b);\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
