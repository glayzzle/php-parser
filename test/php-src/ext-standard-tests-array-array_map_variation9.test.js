// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation9.phpt
  it("Test array_map() function : usage variations - binary safe checking", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing array having binary values for $arr1 argument\n */\necho \"*** Testing array_map() : array with binary data for 'arr1' argument ***\\n\";\nfunction callback1($a)\n{\n  return ($a);\n}\nfunction callback2($a, $b)\n{\n  return array($a => $b);\n}\n// array with binary data\n$arr1 = array(b\"hello\", b\"world\", \"1\", b\"22.22\");\necho \"-- checking binary safe array with one parameter callback function --\\n\";\nvar_dump( array_map('callback1', $arr1) );\necho \"-- checking binary safe array with two parameter callback function --\\n\";\ntry {\n    var_dump( array_map(b\"callback2\", $arr1) );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
