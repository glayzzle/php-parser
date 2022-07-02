// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_007.phpt
  it("Pass function and method calls by reference and by value.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    static function sreturnVal() {\n        global $a;\n        return $a;\n    }\n    static function &sreturnReference() {\n        global $a;\n        return $a;\n    }\n    function returnVal() {\n        global $a;\n        return $a;\n    }\n    function &returnReference() {\n        global $a;\n        return $a;\n    }\n}\nfunction returnVal() {\n        global $a;\n        return $a;\n}\nfunction &returnReference() {\n        global $a;\n        return $a;\n}\nfunction foo(&$ref) {\n    var_dump($ref);\n    $ref = \"changed\";\n}\necho \"Pass a function call that returns a value:\\n\";\n$a = \"original\";\nfoo(returnVal());\nvar_dump($a);\necho \"Pass a function call that returns a reference:\\n\";\n$a = \"original\";\nfoo(returnReference());\nvar_dump($a);\necho \"\\nPass a static method call that returns a value:\\n\";\n$a = \"original\";\nfoo(C::sreturnVal());\nvar_dump($a);\necho \"Pass a static method call that returns a reference:\\n\";\n$a = \"original\";\nfoo(C::sreturnReference());\nvar_dump($a);\n$myC = new C;\necho \"\\nPass a method call that returns a value:\\n\";\n$a = \"original\";\nfoo($myC->returnVal());\nvar_dump($a);\necho \"Pass a method call that returns a reference:\\n\";\n$a = \"original\";\nfoo($myC->returnReference());\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
