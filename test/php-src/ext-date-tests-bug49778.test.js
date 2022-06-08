// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug49778.phpt
  it("Bug #49778 (DateInterval::format(\"%a\") is always zero when an interval is created from an ISO string)", function () {
    expect(parser.parseCode("<?php\n$i=new DateInterval('P7D');\nvar_dump($i);\necho $i->format(\"%d\"), \"\\n\";\necho $i->format(\"%a\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
