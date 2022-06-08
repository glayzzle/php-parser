// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug32828.phpt
  it("Bug #32828 (Throwing exception in output_callback function with ob_start and ob_end_clean leads to segfault)", function () {
    expect(parser.parseCode("<?php\nfunction output_handler($buffer)\n{\n    throw new Exception;\n}\nob_start('output_handler');\nob_end_clean();\n?>")).toMatchSnapshot();
  });
});
