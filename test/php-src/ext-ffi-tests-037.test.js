// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/037.phpt
  it("FFI 037: Type memory management", function () {
    expect(parser.parseCode("<?php\nfunction foo($ptr) {\n    $buf = FFI::new(\"int*[1]\");\n    $buf[0] = $ptr;\n    //...\n    return $buf[0];\n}\n$int = FFI::new(\"int\");\n$int->cdata = 42;\nvar_dump(foo(FFI::addr($int)));\n?>")).toMatchSnapshot();
  });
});
