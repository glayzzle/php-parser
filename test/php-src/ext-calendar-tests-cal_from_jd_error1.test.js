// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/cal_from_jd_error1.phpt
  it("Test cal_from_jd() function : error conditions", function () {
    expect(parser.parseCode("<?php\ntry {\n    cal_from_jd(1748326, -1);\n} catch (ValueError $ex) {\n    echo \"{$ex->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
