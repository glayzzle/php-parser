// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/shift_right_002.phpt
  it("JIT Shift Right: 002", function () {
    expect(parser.parseCode("<?php\nfunction shr0(int $a) {\n    return $a >> 0;\n}\nfunction shr1(int $a) {\n    return $a >> 1;\n}\nfunction shr2(int $a) {\n    return $a >> 2;\n}\nfunction shr64(int $a) {\n    return $a >> 64;\n}\nfunction shrNEG(int $a) {\n    return $a >> -1;\n}\nvar_dump(shr0(256));\nvar_dump(shr1(256));\nvar_dump(shr2(256));\nvar_dump(shr2(-8));\ntry {\n    var_dump(shr64(1));\n} catch (Throwable $e) {\n    echo \"Exception \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(shr64(-1));\n} catch (Throwable $e) {\n    echo \"Exception \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(shrNEG(1));\n} catch (Throwable $e) {\n    echo \"Exception (\" . get_class($e) . \"): \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
