// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strnatcasecmp_variation1.phpt
  it("Test strnatcasecmp() function : variation", function () {
    expect(parser.parseCode("<?php\n/* Preparation */\nclass a\n{\n    function __toString()\n    {\n        return \"Hello WORLD\";\n    }\n}\nclass b\n{\n    function __toString()\n    {\n        return \"HELLO world\";\n    }\n}\n$a = new a();\n$b = new b();\nfunction str_dump($a, $b) {\n    var_dump(strnatcasecmp($a, $b));\n}\necho \"*** Testing strnatcasecmp() : variation ***\\n\";\nstr_dump('0', false);\nstr_dump('fooBar', '');\nstr_dump('', -1);\nstr_dump(\"Hello\\0world\", \"Helloworld\");\nstr_dump(\"\\x0\", \"\\0\");\nstr_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
