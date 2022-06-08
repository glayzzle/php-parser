// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/catchable_error_001.phpt
  it("Catchable fatal error [1]", function () {
    expect(parser.parseCode("<?php\n    class Foo {\n    }\n    function blah (Foo $a)\n    {\n    }\n    function error()\n    {\n        $a = func_get_args();\n        var_dump($a);\n    }\n    blah (new StdClass);\n    echo \"ALIVE!\\n\";\n?>")).toMatchSnapshot();
  });
});
