// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/013.phpt
  it("FFI 013: Declaration priorities and constrains", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"int[1][2][3]\");\nvar_dump(count($a));\nvar_dump(count($a[0]));\nvar_dump(count($a[0][0]));\ntry {\n    var_dump(FFI::new(\"void\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    var_dump(FFI::new(\"void[1]\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"static int foo(int)[5];\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"static int foo[5](int);\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"static int foo(int)(int);\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"typedef int foo[2][];\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"typedef int foo[][2];\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
