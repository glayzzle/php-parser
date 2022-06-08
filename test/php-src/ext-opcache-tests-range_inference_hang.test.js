// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/range_inference_hang.phpt
  it("Range inference should not hang", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $a = 0;\n    while (true) {\n        $a = $a+!$a=$a/!!~$a;\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
