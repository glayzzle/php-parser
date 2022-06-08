// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_obj_005.phpt
  it("PRE_INC_OBJ: 005", function () {
    expect(parser.parseCode("<?php\njson_encode($y)->y++;\n?>")).toMatchSnapshot();
  });
});
