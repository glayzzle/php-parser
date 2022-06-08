// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/004.phpt
  it("FFI 004: Enum declarations", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef(<<<EOF\nenum _a;\nenum _a {e1};\nenum _b {e2};\nenum _b;\ntypedef enum _c c;\nenum _c {e3};\nenum _d {e4};\ntypedef enum _d d;\nenum _e;\nenum _f;\ntypedef enum _f f;\nenum _g {\n    _c1,\n    _c2,\n    _c3 = 1,\n    _c4,\n};\nEOF\n);\nvar_dump($ffi->new(\"enum _a\"));\nvar_dump($ffi->new(\"enum _b\"));\nvar_dump($ffi->new(\"c\"));\nvar_dump($ffi->new(\"d\"));\nvar_dump($ffi->new(\"int[_c2]\"));\nvar_dump($ffi->new(\"int[_c3]\"));\nvar_dump($ffi->new(\"int[_c4]\"));\ntry {\n    var_dump($ffi->new(\"enum _e\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    var_dump($ffi->new(\"f\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
