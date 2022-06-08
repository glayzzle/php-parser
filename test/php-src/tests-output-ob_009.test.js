// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_009.phpt
  it("output buffering - ob_get_flush", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"foo\\n\";\nvar_dump(ob_get_flush());\n?>")).toMatchSnapshot();
  });
});
