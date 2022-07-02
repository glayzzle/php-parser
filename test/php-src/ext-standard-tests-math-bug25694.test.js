// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug25694.phpt
  it("Bug #25694 (round() and number_format() inconsistency)", function () {
    expect(parser.parseCode("<?php\necho \"round 0.045 = \" . round(0.045, 2) . \"\\n\";\necho \"number format 0.045 = \" . number_format(0.045, 2) . \"\\n\\n\";\necho \"round 0.055 = \" . round(0.055, 2) . \"\\n\";\necho \"number format 0.055 = \" . number_format(0.055, 2) . \"\\n\\n\";\necho \"round 5.045 = \" . round(5.045, 2) . \"\\n\";\necho \"number format 5.045 = \" . number_format(5.045, 2) . \"\\n\\n\";\necho \"round 5.055 = \" . round(5.055, 2) . \"\\n\";\necho \"number format 5.055 = \" . number_format(5.055, 2) . \"\\n\\n\";\necho \"round 3.025 = \" . round(3.025, 2) . \"\\n\";\necho \"number format 3.025 = \" . number_format(3.025, 2) . \"\\n\\n\";\necho \"round 4.025 = \" . round(4.025, 2) . \"\\n\";\necho \"number format 4.025 = \" . number_format(4.025, 2) . \"\\n\\n\";\n?>")).toMatchSnapshot();
  });
});
