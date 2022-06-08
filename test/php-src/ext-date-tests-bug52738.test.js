// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52738.phpt
  it("Bug #52738 (Can't use new properties in class extended from DateInterval)", function () {
    expect(parser.parseCode("<?php\nclass di extends DateInterval {\n    public $unit = 1;\n}\n$I = new di('P10D');\necho $I->unit.\"\\n\";\n$I->unit++;\necho $I->unit.\"\\n\";\n$I->unit = 42;\necho $I->unit.\"\\n\";\n$I->d++;\nprint_r($I);\n?>")).toMatchSnapshot();
  });
});
