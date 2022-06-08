// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_004.phpt
  it("Only public and protected class constants should be inherited", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public const X = 1;\n    protected const Y = 2;\n    private const Z = 3;\n}\nclass B extends A {\n    static public function checkConstants() {\n        var_dump(self::X);\n        var_dump(self::Y);\n        var_dump(self::Z);\n    }\n}\nB::checkConstants();\n?>")).toMatchSnapshot();
  });
});
