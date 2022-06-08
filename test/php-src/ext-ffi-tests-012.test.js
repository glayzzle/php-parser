// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/012.phpt
  it("FFI 012: serialization", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(serialize(FFI::new(\"int[2]\")));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
