// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_006.phpt
  it("output buffering - ob_end_flush", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"foo\\n\";\nob_end_flush();\nvar_dump(ob_get_level());\n?>")).toMatchSnapshot();
  });
});
