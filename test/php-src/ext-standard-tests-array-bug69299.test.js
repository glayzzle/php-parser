// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69299.phpt
  it("Bug #69299 (Regression in array_filter's $flag argument in PHP 7)", function () {
    expect(parser.parseCode("<?php\n$toFilter = array('foo' => 'bar', 'fiz' => 'buz');\n$filtered = array_filter($toFilter, function ($value, $key) {\n    if ($value === 'buz'\n        || $key === 'foo'\n    ) {\n        return false;\n    }\n    return true;\n}, ARRAY_FILTER_USE_BOTH);\nvar_dump($filtered);\n?>")).toMatchSnapshot();
  });
});
