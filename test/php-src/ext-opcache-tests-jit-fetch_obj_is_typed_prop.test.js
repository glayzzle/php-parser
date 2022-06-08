// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_is_typed_prop.phpt
  it("FETCH_OBJ_IS on typed object property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public stdClass $data;\n}\nfunction test() {\n    $test = new Test;\n    var_dump(isset($test->data[0]));\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
