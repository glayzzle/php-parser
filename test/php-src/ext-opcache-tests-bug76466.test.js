// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76466.phpt
  it("Bug #76466 Loop variable confusion", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    for ($i = 0; $i < 2; $i++) {\n        $field_array[] = [$i, 0];\n    }\n    var_dump($field_array);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
