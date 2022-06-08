// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug43958.phpt
  it("Bug #43958 (class name added into the error message)", function () {
    expect(parser.parseCode("<?php\nclass MyClass\n{\n    static public function loadCode($p) {\n        return include $p;\n    }\n}\nMyClass::loadCode('file-which-does-not-exist-on-purpose.php');\n?>")).toMatchSnapshot();
  });
});
