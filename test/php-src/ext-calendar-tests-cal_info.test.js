// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/cal_info.phpt
  it("cal_info()", function () {
    expect(parser.parseCode("<?php\n  print_r(cal_info());\n  print_r(cal_info(1));\n  try {\n      cal_info(99999);\n  } catch (ValueError $ex) {\n      echo \"{$ex->getMessage()}\\n\";\n  }\n?>")).toMatchSnapshot();
  });
});
