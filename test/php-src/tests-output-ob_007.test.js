// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_007.phpt
  it("output buffering - ob_get_clean", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"foo\\n\";\nvar_dump(ob_get_clean());\n?>")).toMatchSnapshot();
  });
});
