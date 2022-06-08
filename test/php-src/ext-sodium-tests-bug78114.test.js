// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/bug78114.phpt
  it("Bug #78114 (segfault when calling sodium_* functions from eval)", function () {
    expect(parser.parseCode("<?php\ntry {\n    eval('sodium_bin2hex();');\n} catch (Throwable $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
