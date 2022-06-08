// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/003.phpt
  it("FFI 003: Forward tag/typedef declarations", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef(<<<EOF\nstruct _a;\nstruct _a {int x;};\nstruct _b {int x;};\nstruct _b;\ntypedef struct _c c;\nstruct _c {int x;};\nstruct _d {int x;};\ntypedef struct _d d;\nstruct _e;\nstruct _f;\ntypedef struct _f f;\nEOF\n);\nvar_dump($ffi->new(\"struct _a\"));\nvar_dump($ffi->new(\"struct _b\"));\nvar_dump($ffi->new(\"c\"));\nvar_dump($ffi->new(\"d\"));\ntry {\n    var_dump($ffi->new(\"struct _e\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    var_dump($ffi->new(\"f\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
