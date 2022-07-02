// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/sleep_deref.phpt
  it("__sleep() can return references", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $x = 42;\n    public function __sleep() {\n        $name = 'x';\n        return [&$name];\n    }\n}\nvar_dump(serialize(new Test));\n?>")).toMatchSnapshot();
  });
});
