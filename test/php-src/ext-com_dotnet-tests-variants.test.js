// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/variants.phpt
  it("COM: General variant tests", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$v = new VARIANT();\nif (VT_EMPTY != variant_get_type($v)) {\n    echo \"VT_EMPTY: bork\\n\";\n}\n$values = array(VT_I4 => 42, VT_R8 => 3.5, VT_BSTR => \"hello\", VT_BOOL => false);\n$binary_ops = array('add', 'cat', 'sub', 'mul', 'and', 'div',\n    'eqv', 'idiv', 'imp', 'mod', 'or', 'pow', 'xor');\nforeach ($values as $t => $val) {\n    $v = new VARIANT($val);\n    if ($t != variant_get_type($v)) {\n        printf(\"Bork: [%d] %d: %s\\n\", $t, variant_get_type($v), $val);\n        print $v . \"\\n\";\n    }\n    $results = array();\n    foreach ($values as $op2) {\n        echo \"--\\n\";\n        foreach ($binary_ops as $op) {\n            try {\n                echo \"$op: \" . call_user_func('variant_' . $op, $v, $op2) . \"\\n\";\n            } catch (com_exception $e) {\n                echo \"$op:\\n\";\n                echo \"\\tvariant_$op($v, $op2)\\n\";\n                echo \"\\texception \" . $e->getMessage();\n                printf(\"\\n\\tcode %08x\\n\\n\", $e->getCode());\n            }\n        }\n    }\n}\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});
