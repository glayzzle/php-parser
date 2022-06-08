// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/011.phpt
  it("Implicit break in match expression", function () {
    expect(parser.parseCode("<?php\nfunction dump_and_return($string) {\n    var_dump($string);\n    return $string;\n}\nvar_dump(match ('foo') {\n    'foo' => dump_and_return('foo'),\n    'bar' => dump_and_return('bar'),\n});\n?>")).toMatchSnapshot();
  });
});
