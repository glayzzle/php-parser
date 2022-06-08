// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug77706.phpt
  it("Bug #77632 (FFI Segfaults When Called With Variadics)", function () {
    expect(parser.parseCode("<?php\n$header = '\ntypedef struct _IO_FILE FILE;\nextern FILE *stdout;\nextern FILE *stdin;\nextern FILE *stderr;\ntypedef uint64_t time_t;\ntypedef uint32_t pid_t;\ntime_t time(time_t*);\npid_t getpid(void);\nint fprintf(FILE *, const char *, ...);\n';\n$ffi = FFI::cdef($header, 'libc.so.6');\ntry {\n    $ffi->time();\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    $ffi->time(null, null);\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    $ffi->fprintf($ffi->stdout);\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    $ffi->fprintf($ffi->stdout, 123, \"Hello %s\\n\", \"World\");\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
