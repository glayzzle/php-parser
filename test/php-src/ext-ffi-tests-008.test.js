// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/008.phpt
  it("FFI 008: Array iteration", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"int[3]\");\n$a[1] = 10;\n$a[2] = 20;\nvar_dump(count($a));\nforeach ($a as $key => $val) {\n    echo \"$key => $val\\n\";\n}\n$a = FFI::new(\"struct {int x,y;}\");\ntry {\n    var_dump(count($a));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    foreach ($a as $key => $val) {\n        echo \"$key => $val\\n\";\n    }\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
