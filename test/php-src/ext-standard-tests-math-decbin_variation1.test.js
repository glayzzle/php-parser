// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/decbin_variation1.phpt
  it("Test decbin() function : usage variations - different data types as $num arg", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing decbin() : usage variations ***\\n\";\n$inputs = [\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       4294967295,  // largest decimal\n       4294967296,\n       // float data\n/* 7*/ 12.3456789000e10,\n       // boolean data\n/* 8*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*12*/ \"\",\n       '',\n];\n// loop through each element of $inputs to check the behaviour of decbin()\nforeach ($inputs as $i => $input) {\n    $iterator = $i + 1;\n    echo \"\\n-- Iteration $iterator --\\n\";\n    try {\n        var_dump(decbin($input));\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
