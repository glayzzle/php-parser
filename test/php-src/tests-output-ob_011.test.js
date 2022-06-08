// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_011.phpt
  it("output buffering - fatalism", function () {
    expect(parser.parseCode("<?php\nfunction obh($s)\n{\n    return ob_get_flush();\n}\nob_start(\"obh\");\necho \"foo\\n\";\n?>")).toMatchSnapshot();
  });
});
