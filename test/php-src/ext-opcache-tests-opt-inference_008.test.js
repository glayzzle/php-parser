// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/inference_008.phpt
  it("Type inference 008: ASSIGN_DIM with invalid op1", function () {
    expect(parser.parseCode("<?php\nfunction y() {\n    $j = 0;\n    for(;;) {\n        $cs = $a + $a;\n        $a = [] ?? $cs[] = $j;\n    }\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
