// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bind_static.phpt
  it("Bind static may throw", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    static $N = UNDEFINED;\n    throw new Exception;\n}\ntry {\n    test();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
