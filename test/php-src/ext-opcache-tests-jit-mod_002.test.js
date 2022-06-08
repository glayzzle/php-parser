// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mod_002.phpt
  it("JIT MOD: 002", function () {
    expect(parser.parseCode("<?php\nfunction mod33(int $a) {\n    return $a % 33;\n}\nfunction mod32(int $a) {\n    return $a % 32;\n}\nfunction modNeg33(int $a) {\n    return $a % -33;\n}\nfunction modNeg1(int $a) {\n    return $a % -1;\n}\nfunction mod0(int $a) {\n    return $a % 0;\n}\nvar_dump(mod33(125));\nvar_dump(mod32(125));\nvar_dump(mod33(-125));\nvar_dump(mod32(-125));\nvar_dump(modNeg33(125));\nvar_dump(modNeg33(-125));\ntry {\n    var_dump(modNeg1(125));\n} catch (Throwable $e) {\n    echo \"Exception \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(mod0(125));\n} catch (Throwable $e) {\n    echo \"Exception (\" . get_class($e) . \"): \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
