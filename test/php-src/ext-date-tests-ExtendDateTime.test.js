// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/ExtendDateTime.phpt
  it("Extendig DatTime and calling __set_state without args", function () {
    expect(parser.parseCode("<?php\nclass MyDateTime extends DateTime {\n    public static function __set_state() {}\n}\n?>")).toMatchSnapshot();
  });
});
