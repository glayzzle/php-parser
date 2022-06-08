// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/type.phpt
  it("gettype(), settype() and friends", function () {
    expect(parser.parseCode("<?php\nfunction foo($errno, $errstr, $errfile, $errline) {\n    var_dump($errstr);\n}\nset_error_handler(\"foo\");\n$fp = fopen(__FILE__, \"r\");\nfclose($fp);\n$fp1 = fopen(__FILE__, \"r\");\n$var1 = \"another string\";\n$var2 = array(2,3,4);\n$array = array(\n    array(1,2,3),\n    $var1,\n    $var2,\n    1,\n    2.0,\n    NULL,\n    false,\n    \"some string\",\n    $fp,\n    $fp1,\n    new stdclass,\n);\n$types = array(\n    \"null\",\n    \"integer\",\n    \"double\",\n    \"boolean\",\n    \"resource\",\n    \"array\",\n    \"object\",\n    \"string\"\n    );\nforeach ($array as $var) {\n    var_dump(gettype($var));\n}\nforeach ($types as $type) {\n    foreach ($array as $var) {\n        try {\n            var_dump(settype($var, $type));\n        } catch (Error $e) {\n            echo \"Error: \", $e->getMessage(), \"\\n\";\n        }\n        var_dump($var);\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
