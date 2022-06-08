// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/shift_left_001.phpt
  it("JIT Shift Left: 001", function () {
    expect(parser.parseCode("<?php\nfunction shl(int $a, int $b) {\n    return $a << $b;\n}\nvar_dump(shl(1, 0));\nvar_dump(shl(1, 1));\nvar_dump(shl(1, 2));\nvar_dump(shl(-1, 2));\ntry {\n    var_dump(shl(1, 64));\n} catch (Throwable $e) {\n    echo \"Exception \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(shl(1, -1));\n} catch (Throwable $e) {\n    echo \"Exception (\" . get_class($e) . \"): \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
