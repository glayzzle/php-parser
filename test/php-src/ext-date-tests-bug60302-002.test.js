// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug60302-002.phpt
  it("Test for bug #60302: DateTimeImmutable::createFromFormat should new static(), not new self()", function () {
    expect(parser.parseCode("<?php\nclass MyDateTime extends DateTimeImmutable { }\n$d = MyDateTime::createFromFormat('Y-m-d', '2011-01-01');\necho get_class($d);\n?>")).toMatchSnapshot();
  });
});
