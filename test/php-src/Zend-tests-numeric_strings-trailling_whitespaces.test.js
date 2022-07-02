// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_strings/trailling_whitespaces.phpt
  it("Acceptance of whitespace in numeric strings", function () {
    expect(parser.parseCode("<?php\n$strings = [\n    \"123\",\n    \"123   \",\n    \"123 \\t\\n\\r\\v\\f\",\n    \"   123\",\n    \" \\t\\n\\r\\v\\f123\",\n    \"   123   \",\n    \" \\t\\n\\r\\v\\f123 \\t\\n\\r\\v\\f\",\n    \"123.0\",\n    \"123.0   \",\n    \"123.0 \\t\\n\\r\\v\\f\",\n    \"   123.0\",\n    \" \\t\\n\\r\\v\\f123.0\",\n    \"   123.0   \",\n    \" \\t\\n\\r\\v\\f123 \\t\\n\\r\\v\\f\",\n    \"123e0\",\n    \"123e0   \",\n    \"123e0 \\t\\n\\r\\v\\f\",\n    \"   123e0\",\n    \" \\t\\n\\r\\v\\f123e0\",\n    \"   123e0   \",\n    \" \\t\\n\\r\\v\\f123e0 \\t\\n\\r\\v\\f\"\n];\nfunction takes_integer(int $i) {\n    \\assert($i === 123);\n}\nfunction takes_float(float $f) {\n    \\assert($f === 123.0);\n}\nforeach ($strings as $string) {\n    \\assert($string == 123);\n    $num = +$string;\n    \\assert($num == 123);\n    takes_integer($string);\n    takes_float($string);\n    \\assert(\\intdiv($string, 1) === 123);\n    \\assert(\\is_numeric($string));\n    $incremented = $string;\n    ++$incremented;\n    \\assert(\\is_int($incremented) || \\is_float($incremented));\n    \\assert($incremented == 124);\n    $decremented = $string;\n    --$decremented;\n    \\assert(\\is_int($decremented) || \\is_float($decremented));\n    \\assert($decremented == 122);\n}\necho \"OK!\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
