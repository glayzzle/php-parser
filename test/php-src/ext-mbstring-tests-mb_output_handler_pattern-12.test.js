// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_output_handler_pattern-12.phpt
  it("mb_output_handler() and mbstring.http_output_conv_mimetypes (12)", function () {
    expect(parser.parseCode("<?php\nmb_http_output(\"EUC-JP\");\nheader(\"Content-Type: text/html\");\nob_start();\nob_start('mb_output_handler');\necho \"テスト\";\nob_end_flush();\nvar_dump(bin2hex(ob_get_clean()));\n?>")).toMatchSnapshot();
  });
});
