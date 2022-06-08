// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/easter_date.phpt
  it("easter_date()", function () {
    expect(parser.parseCode("<?php\nputenv('TZ=UTC');\necho date(\"Y-m-d\", easter_date(2000)).\"\\n\";\necho date(\"Y-m-d\", easter_date(2001)).\"\\n\";\necho date(\"Y-m-d\", easter_date(2002)).\"\\n\";\ntry {\n    easter_date(1492);\n} catch (ValueError $ex) {\n    echo \"{$ex->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
