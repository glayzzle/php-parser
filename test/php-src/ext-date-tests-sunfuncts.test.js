// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/sunfuncts.phpt
  it("date_sunrise() and date_sunset() functions", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Asia/Jerusalem');\nfor($a=1;$a<=12;$a++){\n    echo date_sunrise(mktime(1,1,1,$a,1,2003),SUNFUNCS_RET_TIMESTAMP,31.76670,35.23330,90.83,2).\" \";\n    echo date_sunrise(mktime(1,1,1,$a,1,2003),SUNFUNCS_RET_STRING,31.76670,35.23330,90.83,2).\" \";\n    echo date_sunrise(mktime(1,1,1,$a,1,2003),SUNFUNCS_RET_DOUBLE,31.76670,35.23330,90.83,2).\"\\n\";\n    echo date_sunset(mktime(1,1,1,$a,1,2003),SUNFUNCS_RET_TIMESTAMP,31.76670,35.23330,90.83,2).\" \";\n    echo date_sunset(mktime(1,1,1,$a,1,2003),SUNFUNCS_RET_STRING,31.76670,35.23330,90.83,2).\" \";\n    echo date_sunset(mktime(1,1,1,$a,1,2003),SUNFUNCS_RET_DOUBLE,31.76670,35.23330,90.83,2).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
