// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/unixtojd_error1.phpt
  it("Test unixtojd() function : error conditions", function () {
    expect(parser.parseCode("<?php\nputenv('TZ=UTC');\ntry {\n    unixtojd(-1);\n} catch (ValueError $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\nvar_dump(unixtojd(false)) . PHP_EOL;\nvar_dump(unixtojd(null)) . PHP_EOL;\nvar_dump(unixtojd(time())) . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
