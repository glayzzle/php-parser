// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_020.phpt
  it("output buffering - ob_list_handlers", function () {
    expect(parser.parseCode("<?php\nprint_r(ob_list_handlers());\nob_start();\nprint_r(ob_list_handlers());\nob_start();\nprint_r(ob_list_handlers());\nob_end_flush();\nprint_r(ob_list_handlers());\nob_end_flush();\nprint_r(ob_list_handlers());\n?>")).toMatchSnapshot();
  });
});
