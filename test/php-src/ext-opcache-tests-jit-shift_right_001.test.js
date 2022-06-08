// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/shift_right_001.phpt
  it("JIT Shift Right: 001", function () {
    expect(parser.parseCode("<?php\nfunction shr(int $a, int $b) {\n    return $a >> $b;\n}\nvar_dump(shr(256, 0));\nvar_dump(shr(256, 1));\nvar_dump(shr(256, 2));\nvar_dump(shr(-8, 2));\ntry {\n    var_dump(shr(1, 64));\n} catch (Throwable $e) {\n    echo \"Exception \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(shr(-1, 64));\n} catch (Throwable $e) {\n    echo \"Exception \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(shr(1, -1));\n} catch (Throwable $e) {\n    echo \"Exception (\" . get_class($e) . \"): \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
