// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/028.phpt
  it("Testing calling user-level functions from C", function () {
    expect(parser.parseCode("<?php\nerror_reporting(1023);\nfunction print_stuff($stuff)\n{\n    print $stuff;\n}\nfunction still_working()\n{\n    return \"I'm still alive\";\n}\nfunction dafna()\n{\n    static $foo = 0;\n    print \"Dafna!\\n\";\n    print call_user_func(\"still_working\").\"\\n\";\n    $foo++;\n    return (string) $foo;\n}\nclass dafna_class {\n    function __construct() {\n        $this->myname = \"Dafna\";\n    }\n    function GetMyName() {\n        return $this->myname;\n    }\n    function SetMyName($name) {\n        $this->myname = $name;\n    }\n};\nfor ($i=0; $i<200; $i++):\n    print \"$i\\n\";\n    call_user_func(\"dafna\");\n    call_user_func(\"print_stuff\",\"Hey there!!\\n\");\n    print \"$i\\n\";\nendfor;\n$dafna = new dafna_class();\nprint $name=call_user_func(array(&$dafna,\"GetMyName\"));\nprint \"\\n\";\n?>")).toMatchSnapshot();
  });
});
