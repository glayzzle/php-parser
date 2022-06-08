// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_get_status.phpt
  it("ob_get_status() function basic test", function () {
    expect(parser.parseCode("<?php\nob_start();\n$status = ob_get_status(true);\nob_end_clean();\nvar_dump($status);\n?>")).toMatchSnapshot();
  });
});
