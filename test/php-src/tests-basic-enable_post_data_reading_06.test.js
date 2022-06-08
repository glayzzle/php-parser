// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/enable_post_data_reading_06.phpt
  it("enable_post_data_reading: using multiple input streams (more than 8k data)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\n$f1 = fopen(\"php://input\", \"r\");\n$f2 = fopen(\"php://input\", \"r\");\nwhile (!feof($f1) && !feof($f2)) {\n    echo fgets($f1), fgets($f2);\n}\n?>\nDone")).toMatchSnapshot();
  });
});
