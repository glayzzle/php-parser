// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/inference_007.phpt
  it("Type inference 007: Incorrect array key type inference", function () {
    expect(parser.parseCode("<?php\nfunction y() {\n    for(;;) {\n        s($array[]);\n        $array = array(\"\"=>\"\");\n    }\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
