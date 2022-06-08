// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/036.phpt
  it("FFI 036: Type memory management", function () {
    expect(parser.parseCode("<?php\n$type = FFI::type(\"int*\");\nfunction foo($ptr) {\n    global $type;\n    //$buf = FFI::new(\"int*[1]\"); /* this loses type and crash */\n    $buf = FFI::new(FFI::arrayType($type, [1]));\n    $buf[0] = $ptr;\n    //...\n    return $buf[0];\n}\n$int = FFI::new(\"int\");\n$int->cdata = 42;\nvar_dump(foo(FFI::addr($int)));\n?>")).toMatchSnapshot();
  });
});
