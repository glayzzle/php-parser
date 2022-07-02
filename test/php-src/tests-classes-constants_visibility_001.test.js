// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_001.phpt
  it("Class public constant visibility", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public const publicConst = 'publicConst';\n    static function staticConstDump() {\n        var_dump(self::publicConst);\n    }\n    function constDump() {\n        var_dump(self::publicConst);\n    }\n}\nvar_dump(A::publicConst);\nA::staticConstDump();\n(new A())->constDump();\n?>")).toMatchSnapshot();
  });
});
