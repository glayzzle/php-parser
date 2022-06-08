// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug68104.phpt
  it("Bug #68104 (Segfault while pre-evaluating a disabled function)", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_callable(\"dl\"));\ntry {\n    dl(\"a.so\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
