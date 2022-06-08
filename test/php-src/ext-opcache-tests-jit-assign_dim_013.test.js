// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_013.phpt
  it("JIT ASSIGN_DIM: 013", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for(;;) {\n        $arr[] = $obj = new stdClass;\n        $obj->y = set_error_handler(function(){});\n        foreach($obj as $y) {\n        }\n        $arr = ['' => y];\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
