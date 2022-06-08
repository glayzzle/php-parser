// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/intdiv.phpt
  it("intdiv functionality", function () {
    expect(parser.parseCode("<?php\nvar_dump(intdiv(3, 2));\nvar_dump(intdiv(-3, 2));\nvar_dump(intdiv(3, -2));\nvar_dump(intdiv(-3, -2));\nvar_dump(intdiv(PHP_INT_MAX, PHP_INT_MAX));\nvar_dump(intdiv(PHP_INT_MIN, PHP_INT_MIN));\ntry {\n  var_dump(intdiv(PHP_INT_MIN, -1));\n} catch (Throwable $e) {\n  echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry {\n  var_dump(intdiv(1, 0));\n} catch (Throwable $e) {\n  echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
