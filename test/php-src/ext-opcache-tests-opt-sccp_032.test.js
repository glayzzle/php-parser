// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_032.phpt
  it("SCCP 032: Yield from optimizations", function () {
    expect(parser.parseCode("<?php\nfunction test(): Generator {\n    $result = yield from [];\n    $a = [];\n    yield from $a;\n    yield $result;\n    $a[] = 3;\n    yield from $a;\n}\nforeach (test() as $x) {\n    var_export($x);\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
