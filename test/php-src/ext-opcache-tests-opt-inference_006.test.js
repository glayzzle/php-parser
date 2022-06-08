// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/inference_006.phpt
  it("Type inference 006: FETCH_DIM_W with invalid key type", function () {
    expect(parser.parseCode("<?php\nfunction y() {\n    $obj=new y;\n    u($y[$obj]);\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
