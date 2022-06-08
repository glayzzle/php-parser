// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74173.phpt
  it("Bug #74173 (DateTimeImmutable::getTimestamp() triggers DST switch in incorrect time)", function () {
    expect(parser.parseCode("<?php\n$utc = new \\DateTimeImmutable('2016-10-30T00:00:00+00:0');\n$prg = $utc->setTimeZone(new \\DateTimeZone('Europe/Prague'));\necho $prg->format('c') . \"\\n\";\n$prg->getTimestamp();\necho $prg->format('c') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
