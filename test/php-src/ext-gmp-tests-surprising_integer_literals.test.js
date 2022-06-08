// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/surprising_integer_literals.phpt
  it("Surprising result with integer literals (hex/binary/octal)", function () {
    expect(parser.parseCode("<?php\n$values = [\n    '0x',\n    '0X',\n    '0b',\n    '0B',\n    '0o',\n    '0O',\n    ''\n];\nforeach ($values as $value) {\n    try {\n        var_dump(gmp_init($value));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage(), \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
