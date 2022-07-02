// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug63911.phpt
  it("Bug #63911 (Ignore conflicting trait methods originationg from identical sub traits)", function () {
    expect(parser.parseCode("<?php\ntrait A\n{\n    public function a(){\n        echo 'Done';\n    }\n}\ntrait B\n{\n    use A;\n}\ntrait C\n{\n    use A;\n}\nclass D\n{\n    use B, C;\n}\n(new D)->a();\n?>")).toMatchSnapshot();
  });
});
