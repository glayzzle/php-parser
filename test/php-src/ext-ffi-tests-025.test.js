// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/025.phpt
  it("FFI 025: direct work with primitive types", function () {
    expect(parser.parseCode("<?php\n    $x = FFI::new(\"int\");\n    $x->cdata = 5;\n    var_dump($x);\n    $x->cdata += 2;\n    var_dump($x);\n    echo \"$x\\n\\n\";\n    unset($x);\n    $x = FFI::new(\"char\");\n    $x->cdata = 'a';\n    var_dump($x);\n    $x->cdata++;\n    var_dump($x);\n    echo \"$x\\n\\n\";\n    unset($x);\n?>")).toMatchSnapshot();
  });
});
