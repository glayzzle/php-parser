// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_003.phpt
  it("output buffering - ob_flush", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"foo\\n\";\nob_flush();\necho \"bar\\n\";\nob_flush();\n?>")).toMatchSnapshot();
  });
});
