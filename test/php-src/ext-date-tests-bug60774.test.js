// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug60774.phpt
  it("Bug #60774 (DateInterval::format(\"%a\") is always zero when an interval is created using the createFromDateString method)", function () {
    expect(parser.parseCode("<?php\n$i= DateInterval::createFromDateString('2 days');\nvar_dump($i);\necho $i->format(\"%d\"), \"\\n\";\necho $i->format(\"%a\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
