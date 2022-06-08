// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/double_to_string.phpt
  it("double to string conversion tests", function () {
    expect(parser.parseCode("<?php\n$doubles = array(\n    290000000000000000,\n    290000000000000,\n    29000000000000,\n    29000000000000.123123,\n    29000000000000.7123123,\n    29000.7123123,\n    239234242.7123123,\n    0.12345678901234567890,\n    10000000000000,\n    100000000000000,\n    1000000000000000001,\n    100000000000001,\n    10000000000,\n    999999999999999,\n    9999999999999999,\n    (float)0\n    );\nforeach ($doubles as $d) {\n    var_dump((string)$d);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
