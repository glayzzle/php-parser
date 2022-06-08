// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/strtotime_variation_scottish.phpt
  it("Checking whisky time", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set('UTC');\n    var_dump(date('H:i:s', strtotime('back of 7')));\n    var_dump(date('H:i:s', strtotime('front of 7')));\n    var_dump(date('H:i:s', strtotime('back of 19')));\n    var_dump(date('H:i:s', strtotime('front of 19')));\n?>")).toMatchSnapshot();
  });
});
