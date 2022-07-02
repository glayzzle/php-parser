// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/static_basic_001.phpt
  it("Static keyword - basic tests", function () {
    expect(parser.parseCode("<?php\necho \"\\nSame variable used as static and non static.\\n\";\nfunction staticNonStatic() {\n    echo \"---------\\n\";\n    $a=0;\n    echo \"$a\\n\";\n    static $a=10;\n    echo \"$a\\n\";\n    $a++;\n}\nstaticNonStatic();\nstaticNonStatic();\nstaticNonStatic();\necho \"\\nLots of initialisations in the same statement.\\n\";\nfunction manyInits() {\n    static $counter=0;\n    echo \"------------- Call $counter --------------\\n\";\n    static $a, $b=10, $c=20, $d, $e=30;\n    echo \"Uninitialized    : $a\\n\";\n    echo \"Initialized to 10: $b\\n\";\n    echo \"Initialized to 20: $c\\n\";\n    echo \"Uninitialized    : $d\\n\";\n    echo \"Initialized to 30: $e\\n\";\n    $a++;\n    $b++;\n    $c++;\n    $d++;\n    $e++;\n    $counter++;\n}\nmanyInits();\nmanyInits();\nmanyInits();\necho \"\\nUsing static keyword at global scope\\n\";\nfor ($i=0; $i<3; $i++) {\n   static $s, $k=10;\n   echo \"$s $k\\n\";\n   $s++;\n   $k++;\n}\n?>")).toMatchSnapshot();
  });
});
