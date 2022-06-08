// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/compact.phpt
  it("compact()", function () {
    expect(parser.parseCode("<?php\n$çity  = \"San Francisco\";\n$state = \"CA\";\n$event = \"SIGGRAPH\";\n$location_vars = array(\"c\\\\u0327ity\", \"state\");\n$result = compact(\"event\", $location_vars);\nvar_dump($result);\n$result = compact(true);\n$foo = 'bar';\n$bar = 'baz';\n$result = compact($foo, [42]);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
