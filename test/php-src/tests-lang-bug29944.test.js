// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug29944.phpt
  it("Bug #29944 (function defined in switch crashes PHP)", function () {
    expect(parser.parseCode("<?PHP\n$a = 1;\n$b = \"1\";\nswitch ($a) {\n    case 1:\n        function foo($bar) {\n            if (preg_match('/\\d/', $bar)) return true;\n            return false;\n        }\n        echo foo($b);\n}\n?>")).toMatchSnapshot();
  });
});
