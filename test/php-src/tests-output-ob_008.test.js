// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_008.phpt
  it("output buffering - ob_get_contents", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"foo\\n\";\necho ob_get_contents();\n?>")).toMatchSnapshot();
  });
});
