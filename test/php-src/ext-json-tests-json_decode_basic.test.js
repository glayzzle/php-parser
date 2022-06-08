// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_decode_basic.phpt
  it("Test json_decode() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing json_decode() : basic functionality ***\\n\";\n// array with different values for $string\n$inputs =  array (\n    '0',\n    '123',\n    '-123',\n    '2147483647',\n    '-2147483648',\n    '123.456',\n    '1230',\n    '-1230',\n    'true',\n    'false',\n    'null',\n    '\"abc\"',\n    '\"Hello World\\r\\n\"',\n    '[]',\n    '[1,2,3,4,5]',\n    '{\"myInt\":99,\"myFloat\":123.45,\"myNull\":null,\"myBool\":true,\"myString\":\"Hello World\"}',\n    '{\"Jan\":31,\"Feb\":29,\"Mar\":31,\"April\":30,\"May\":31,\"June\":30}',\n    '\"\"',\n    '{}'\n);\n// loop through with each element of the $inputs array to test json_decode() function\n$count = 1;\nforeach($inputs as $input) {\n    echo \"-- Iteration $count --\\n\";\n    var_dump(json_decode($input));\n    var_dump(json_decode($input, true));\n    $count++;\n}\n?>")).toMatchSnapshot();
  });
});
