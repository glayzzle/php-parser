// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/catchable_error_002.phpt
  it("Catchable fatal error [2]", function () {
    expect(parser.parseCode("<?php\n    class Foo {\n    }\n    function blah (Foo $a)\n    {\n    }\n    function error()\n    {\n        $a = func_get_args();\n        var_dump($a);\n    }\n    set_error_handler('error');\n    try {\n        blah (new StdClass);\n    } catch (Error $ex) {\n        echo $ex->getMessage(), \"\\n\";\n    }\n    echo \"ALIVE!\\n\";\n?>")).toMatchSnapshot();
  });
});
