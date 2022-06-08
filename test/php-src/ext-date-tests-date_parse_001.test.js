// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_parse_001.phpt
  it("Test basic date_parse()", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set('UTC');\n    var_dump(date_parse(\"2006-12-12 10:00:00.5\"));\n    var_dump(date_parse(\"2006-12-12\"));\n    var_dump(date_parse(\"2006-12--12\"));\n    var_dump(date_parse(\"2006-02-30\"));\n    var_dump(date_parse(\"2006-03-04\"));\n    var_dump(date_parse(\"2006-03\"));\n    var_dump(date_parse(\"03-03\"));\n    var_dump(date_parse(\"0-0\"));\n    var_dump(date_parse(\"\"));\n    echo \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
