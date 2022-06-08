// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug63737.phpt
  it("Bug #63737 (json_decode does not properly decode with options parameter)", function () {
    expect(parser.parseCode("<?php\nfunction decode($json) {\n    $x = json_decode($json);\n    var_dump($x);\n    $x = json_decode($json, false, 512, JSON_BIGINT_AS_STRING);\n    var_dump($x);\n}\ndecode('123456789012345678901234567890');\ndecode('-123456789012345678901234567890');\n// This shouldn't affect floats, but let's check that.\ndecode('123456789012345678901234567890.1');\ndecode('-123456789012345678901234567890.1');\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
