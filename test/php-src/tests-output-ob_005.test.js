// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_005.phpt
  it("output buffering - ob_end_clean", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"foo\\n\";\nob_start();\necho \"bar\\n\";\nob_end_clean();\necho \"baz\\n\";\n?>")).toMatchSnapshot();
  });
});
