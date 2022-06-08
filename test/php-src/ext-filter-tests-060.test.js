// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/060.phpt
  it("filter_var() - tests for the range options of filter FILTER_VALIDATE_FLOAT", function () {
    expect(parser.parseCode("<?php\n$values = [\n    null,\n    false,\n    0,\n    -1,\n    '-5.4',\n    '-5.5',\n    '2,000.00',\n    '2,000.01',\n    '1,999.9999999'\n];\nvar_dump(filter_var(\n    $values,\n    FILTER_VALIDATE_FLOAT,\n    [\n        'options' => [\n            'min_range' => -5.4,\n            'max_range' => 2000,\n        ],\n        'flags' => FILTER_FLAG_ALLOW_THOUSAND | FILTER_REQUIRE_ARRAY\n    ]\n));\nvar_dump(filter_var(\n    '1000',\n    FILTER_VALIDATE_FLOAT,\n    [\n        'options' => [\n            'max_range' => 999.999,\n            'default' => 0\n        ]\n    ]\n));\nvar_dump(filter_var(\n    '-11',\n    FILTER_VALIDATE_FLOAT,\n    [\n        'options' => [\n            'min_range' => -10,\n            'default' => 0\n        ]\n    ]\n));\n?>")).toMatchSnapshot();
  });
});
