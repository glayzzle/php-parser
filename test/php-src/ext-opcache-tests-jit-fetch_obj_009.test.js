// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_009.phpt
  it("JIT: FETCH_OBJ 009", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for ($i = 0; $i < 10; $i++) {\n        $obj = new stdClass;\n        $obj->x[0] = null;\n        $obj->x > $obj->x[0] = null;\n    }\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
