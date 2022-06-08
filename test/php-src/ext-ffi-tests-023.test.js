// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/023.phpt
  it("FFI 023: GCC struct extensions", function () {
    expect(parser.parseCode("<?php\n    try {\n        var_dump(FFI::sizeof(FFI::new(\"struct {}\")));\n    } catch (Throwable $e) {\n        echo get_class($e) . \": \" . $e->getMessage() . \"\\n\";\n    }\n    var_dump(FFI::sizeof(FFI::new(\"struct {int a}\")));\n    var_dump(FFI::sizeof(FFI::new(\"struct {int a; int b}\")));\n?>\nok")).toMatchSnapshot();
  });
});
