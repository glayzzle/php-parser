// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/019.phpt
  it("FFI 019: Parameter type adjustment", function () {
    expect(parser.parseCode("<?php\ntry {\n    FFI::cdef(\"static int foo(int[]);\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"static int foo(int bar(int));\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>\nok")).toMatchSnapshot();
  });
});
