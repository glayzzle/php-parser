// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/020.phpt
  it("FFI 020: read-only", function () {
    expect(parser.parseCode("<?php\ntry {\n    $p = FFI::new(\"struct {int x; const int y;}\");\n    $p->x = 1;\n    $p->y = 1;\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    $p = FFI::new(\"struct {const int x; int y;}\");\n    $p->y = 1;\n    $p->x = 1;\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    $p = FFI::new(\"const struct {int x; int y;}\");\n    $p->x = 1;\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    $p = FFI::new(\"const int[10]\");\n    $p[1] = 1;\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    $p = FFI::new(\"const int * [1]\");\n    $p[0] = null;\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    $p = FFI::new(\"int * const [1]\");\n    $p[0] = null;\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    $f = FFI::cdef(\"typedef int * const t[1];\");\n    $p = $f->new(\"t\");\n    $p[0] = null;\n    echo \"ok\\n\";\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>\nok")).toMatchSnapshot();
  });
});
