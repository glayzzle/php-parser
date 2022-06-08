// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug32555.phpt
  it("Bug #32555 (strtotime(\"tomorrow\") can return false)", function () {
    expect(parser.parseCode("<?php\n$stamp = 1112427000;\nprint date('r', strtotime('now',$stamp)) .\"\\n\";\nprint date('r', strtotime('tomorrow',$stamp)) .\"\\n\";\nprint date('r', strtotime('+1 day',$stamp)) .\"\\n\";\nprint date('r', strtotime('+2 day',$stamp)) .\"\\n\";\n?>")).toMatchSnapshot();
  });
});
