// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_002.phpt
  it("output buffering - ob_start", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"foo\\n\";\n?>")).toMatchSnapshot();
  });
});
