// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_003.phpt
  it("Class private constant visibility", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private const privateConst = 'privateConst';\n    static function staticConstDump() {\n        var_dump(self::privateConst);\n    }\n    function constDump() {\n        var_dump(self::privateConst);\n    }\n}\nA::staticConstDump();\n(new A())->constDump();\ntry {\n    constant('A::privateConst');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
