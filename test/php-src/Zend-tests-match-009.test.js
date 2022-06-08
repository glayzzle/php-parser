// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/009.phpt
  it("Pretty printing for match expression", function () {
    expect(parser.parseCode("<?php\nassert((function () {\n    match ('foo') {\n        'foo', 'bar' => false,\n        'baz' => 'a',\n        default => 'b',\n    };\n})());\n?>")).toMatchSnapshot();
  });
});
