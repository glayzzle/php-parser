// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/035.phpt
  it("FFI 035: FFI::new() not-owned", function () {
    expect(parser.parseCode("<?php\n$p = FFI::new(\"uint16_t[2]\", false);\nvar_dump($p);\nFFI::free($p);\ntry {\n    var_dump($p);\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
