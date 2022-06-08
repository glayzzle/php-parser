// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/016.phpt
  it("FFI 016: Structure constraints", function () {
    expect(parser.parseCode("<?php\ntry {\n    FFI::cdef(\"struct X {void x();};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct X {struct X x;};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct X {struct X *ptr;};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>\nok")).toMatchSnapshot();
  });
});
