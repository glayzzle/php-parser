// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72216.phpt
  it("Bug #72216 (Return by reference with finally is not memory safe)", function () {
    expect(parser.parseCode("<?php\nfunction &test() {\n    $a = [\"ok\"];\n    try {\n        return $a[0];\n    } finally {\n        $a[\"\"] = 42;\n    }\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
