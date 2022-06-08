// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_005.phpt
  it("JIT MUL: 005 exception and SEND optimization", function () {
    expect(parser.parseCode("<?php\nfunction test($a) { \n    var_dump(+$a);\n}   \n    \ntry {\n    test('foo');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}   \n?>")).toMatchSnapshot();
  });
});
