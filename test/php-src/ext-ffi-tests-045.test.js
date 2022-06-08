// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/045.phpt
  it("FFI 045: FFI::isNull()", function () {
    expect(parser.parseCode("<?php\nvar_dump(FFI::isNull(FFI::new(\"int*\")));\n$i = FFI::new(\"int\");\nvar_dump(FFI::isNull(FFI::addr($i)));\ntry {\n    var_dump(FFI::isNull(null));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    var_dump(FFI::isNull(FFI::new(\"int[0]\")));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
