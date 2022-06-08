// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug78270_2.phpt
  it("FR #78270 (Usage of __vectorcall convention with FFI)", function () {
    expect(parser.parseCode("<?php\n$x86 = (PHP_INT_SIZE === 4);\n$arglists = array(\n    'int, int, int, int, int, int, int' => true,\n    'double, int, int, int, int, int, int' => !$x86,\n    'int, double, int, int, int, int, int' => !$x86,\n    'int, int, double, int, int, int, int' => !$x86,\n    'int, int, int, double, int, int, int' => !$x86,\n    'int, int, int, int, double, int, int' => false,\n    'int, int, int, int, int, double, int' => false,\n    'int, int, int, int, int, int, double' => true,\n);\nforeach ($arglists as $arglist => $allowed) {\n    $signature = \"__vectorcall void foobar($arglist);\";\n    try {\n        $ffi = FFI::cdef($signature);\n    } catch (FFI\\ParserException $ex) {\n        if ($allowed) {\n            echo \"($arglist): unexpected ParserException\\n\";\n        }\n    } catch (FFI\\Exception $ex) {\n        if (!$allowed) {\n            echo \"($arglist): unexpected Exception\\n\";\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
