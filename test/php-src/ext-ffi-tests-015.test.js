// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/015.phpt
  it("FFI 015: Incomplete type usage", function () {
    expect(parser.parseCode("<?php\ntry {\n    FFI::cdef(\"struct DIR; static struct DIR dir;\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct DIR; static struct DIR *ptr;\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct DIR; typedef struct DIR DIR; static DIR dir;\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct DIR; typedef struct DIR DIR; static DIR *ptr;\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct DIR; static struct DIR foo();\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct DIR; static struct DIR* foo();\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct DIR; static void foo(struct DIR);\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    FFI::cdef(\"struct DIR; static void foo(struct DIR*);\");\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>\nok")).toMatchSnapshot();
  });
});
