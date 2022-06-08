// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/028.phpt
  it("FFI 028: Incomplete arrays inside structure", function () {
    expect(parser.parseCode("<?php\ntry {\n    FFI::cdef(\"struct _x {int a; int b[0];};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct _x {int a; int b[];};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct _x {int a[0]; int b;};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct _x {int a[]; int b;};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct _x { struct {int a; int b[];}; int c;};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"union _x {int a; int b[];};\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
