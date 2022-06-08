// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mod_001.phpt
  it("JIT MOD: 001", function () {
    expect(parser.parseCode("<?php\nfunction mod(int $a, int $b) {\n    return $a % $b;\n}\nvar_dump(mod(125, 33));\nvar_dump(mod(125, 32));\nvar_dump(mod(-125, 33));\nvar_dump(mod(-125, 32));\nvar_dump(mod(125, -33));\nvar_dump(mod(-125, -33));\ntry {\n    var_dump(mod(125, -1));\n} catch (Throwable $e) {\n    echo \"Exception \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(mod(125, 0));\n} catch (Throwable $e) {\n    echo \"Exception (\" . get_class($e) . \"): \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
