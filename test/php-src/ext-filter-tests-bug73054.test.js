// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug73054.phpt
  it("Bug #73054 (default option ignored when object passed to int filter)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    filter_var(new stdClass, FILTER_VALIDATE_INT, [\n        'options' => ['default' => 2],\n    ]),\n    filter_var(new stdClass, FILTER_VALIDATE_INT, [\n        'options' => ['default' => 2],\n        'flags' => FILTER_NULL_ON_FAILURE\n    ])\n);\n?>")).toMatchSnapshot();
  });
});
