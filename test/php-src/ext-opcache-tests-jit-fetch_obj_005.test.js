// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_005.phpt
  it("JIT: FETCH_OBJ 005", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 3; $i++) {\n\t$a =& $b;\n\t$a->p;\n}\n?>")).toMatchSnapshot();
  });
});
