// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_output_handler_pass.phpt
  it("mb_output_handler() with output_encoding=pass", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_http_output());\nvar_dump(\"\\xff\");\nob_end_flush();\nob_start('mb_output_handler');\nmb_http_output(\"UTF-8\");\nvar_dump(\"\\xff\");\nob_end_flush();\nob_start('mb_output_handler');\nmb_http_output(\"pass\");\nvar_dump(\"\\xff\");\n?>")).toMatchSnapshot();
  });
});
