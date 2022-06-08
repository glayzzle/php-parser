// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/badargs.phpt
  it("Check that bad arguments return the same", function () {
    expect(parser.parseCode("<?php\n$funcs = get_extension_funcs(\"intl\");\nfunction ignore_err() {}\nset_error_handler(\"ignore_err\");\n$arg = new stdClass();\nforeach($funcs as $func) {\n        $rfunc = new ReflectionFunction($func);\n        if($rfunc->getNumberOfRequiredParameters() == 0) {\n                continue;\n        }\n        try {\n            $res = $func($arg);\n        } catch (Exception $e) {\n            continue;\n        } catch (Error $e) {\n            continue;\n        }\n        if($res != false) {\n                echo \"$func: \";\n                var_dump($res);\n        }\n}\necho \"OK!\\n\";\n?>")).toMatchSnapshot();
  });
});
