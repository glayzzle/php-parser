// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_004.phpt
  it("output buffering - ob_clean", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"foo\\n\";\nob_clean();\necho \"bar\\n\";\n?>")).toMatchSnapshot();
  });
});
