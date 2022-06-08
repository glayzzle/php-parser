// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/inference_004.phpt
  it("Type inference 004: Type narrowing warning during type inference of ZEND_FETCH_DIM_W", function () {
    expect(parser.parseCode("<?php\nfunction y() {\n    for(;;){\n        $arr[]->y = c;\n        $arr = c;\n    }\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
