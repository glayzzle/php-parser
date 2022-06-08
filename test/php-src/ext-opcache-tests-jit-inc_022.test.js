// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_022.phpt
  it("JIT INC: 022", function () {
    expect(parser.parseCode("<?php\nfunction inc($x) {\n    return ++$x;\n}\nfunction dec($x) {\n    return --$x;\n}\nvar_dump(inc(\"abc\"));\nvar_dump(inc(\"5\"));\nvar_dump(inc(1.1));\nvar_dump(dec(\"5\"));\nvar_dump(dec(1.1));\n?>")).toMatchSnapshot();
  });
});
