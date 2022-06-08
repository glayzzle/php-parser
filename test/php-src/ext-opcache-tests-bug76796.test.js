// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76796.phpt
  it("Bug #76796: Compile-time evaluation of disabled function in opcache (SCCP) causes segfault", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(strpos('foo', 'bar'));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
