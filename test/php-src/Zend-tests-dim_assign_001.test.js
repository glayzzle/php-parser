// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dim_assign_001.phpt
  it("JIT - Assigning to arrays using string key which parses to an integer", function () {
    expect(parser.parseCode("<?php\n/* We are going to store a value in an array, using the key \"1\"\n * PHP should always convert such strings to integers when storing or retrieving\n * values from an array\n *\n * We'll do it in a loop, so that if JIT is enabled, the code will be JIT'd\n * (Because this test was originally added as a regression test for a JIT bug)\n *\n * Also, the test will do this in a way which guarantees PHP won't be able to\n * predict whether the (string) key will be a numeric string or not */\n$fp = fopen(realpath(__DIR__ . '/dim_assign_001.txt'), 'r+');\n$array = array();\nwhile ($line = fgets($fp, 256)) {\n  sscanf($line, '%x', $char);\n  $char = chr($char);\n  $array[$char] = \"Values can be stored correctly using numeric string keys\";\n}\nvar_dump($array['1']);\n?>")).toMatchSnapshot();
  });
});
