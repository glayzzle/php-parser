// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52062-64bit.phpt
  it("Bug #52062 (large timestamps with DateTime::getTimestamp and DateTime::setTimestamp) (64 bit)", function () {
    expect(parser.parseCode("<?php\n$d = new DateTime('@100000000000');\nvar_dump($d->format('Y-m-d H:i:s U'));\nvar_dump($d->getTimestamp());\n$d->setTimestamp(100000000000);\nvar_dump($d->format('Y-m-d H:i:s U'));\nvar_dump($d->getTimestamp());\n$i = new DateInterval('PT100000000000S');\nvar_dump($i->format('%s'));\n?>")).toMatchSnapshot();
  });
});
