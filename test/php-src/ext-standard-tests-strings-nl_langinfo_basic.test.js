// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/nl_langinfo_basic.phpt
  it("Test nl_langinfo() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing nl_langinfo() : basic functionality ***\\n\";\n$original = setlocale(LC_ALL, 'C');\nvar_dump(nl_langinfo(ABDAY_2));\nvar_dump(nl_langinfo(DAY_4));\nvar_dump(nl_langinfo(ABMON_7));\nvar_dump(nl_langinfo(MON_4));\nvar_dump(nl_langinfo(RADIXCHAR));\nsetlocale(LC_ALL, $original);\n?>")).toMatchSnapshot();
  });
});
