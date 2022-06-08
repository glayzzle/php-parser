// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_002.phpt
  it("Class protected constant visibility", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected const protectedConst = 'protectedConst';\n    static function staticConstDump() {\n        var_dump(self::protectedConst);\n    }\n    function constDump() {\n        var_dump(self::protectedConst);\n    }\n}\nA::staticConstDump();\n(new A())->constDump();\ntry {\n    constant('A::protectedConst');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
