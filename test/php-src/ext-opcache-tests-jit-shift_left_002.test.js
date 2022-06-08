// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/shift_left_002.phpt
  it("JIT Shift Left: 002", function () {
    expect(parser.parseCode("<?php\nfunction shl0(int $a) {\n    return $a << 0;\n}\nfunction shl1(int $a) {\n    return $a << 1;\n}\nfunction shl2(int $a) {\n    return $a << 2;\n}\nfunction shl64(int $a) {\n    return $a << 64;\n}\nfunction shlNEG(int $a) {\n    return $a << -1;\n}\nvar_dump(shl0(1));\nvar_dump(shl1(1));\nvar_dump(shl2(1));\nvar_dump(shl2(-1));\ntry {\n    var_dump(shl64(1));\n} catch (Throwable $e) {\n    echo \"Exception \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(shlNEG(1));\n} catch (Throwable $e) {\n    echo \"Exception (\" . get_class($e) . \"): \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
