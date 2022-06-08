// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/011.phpt
  it("timezone_name_from_abbr() tests", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('UTC');\nvar_dump(timezone_name_from_abbr(\"CET\"));\nvar_dump(timezone_name_from_abbr(\"AXST\"));\nvar_dump(timezone_name_from_abbr(\"\", 3600));\nvar_dump(timezone_name_from_abbr(\"\", 3600, 0));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
