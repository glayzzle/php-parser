// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug75851.phpt
  it("Test for bug #75851: Year component overflow with date formats \"c\", \"o\", \"r\" and \"y\"", function () {
    expect(parser.parseCode("<?php\necho date(DATE_ATOM.\"\\n\".DATE_RFC2822.\"\\nc\\nr\\no\\ny\\nY\\nU\\n\\n\", PHP_INT_MIN);\necho date(DATE_ATOM.\"\\n\".DATE_RFC2822.\"\\nc\\nr\\no\\ny\\nY\\nU\\n\\n\", 67767976233532799);\necho date(DATE_ATOM.\"\\n\".DATE_RFC2822.\"\\nc\\nr\\no\\ny\\nY\\nU\\n\\n\", 67767976233532800);\necho date(DATE_ATOM.\"\\n\".DATE_RFC2822.\"\\nc\\nr\\no\\ny\\nY\\nU\\n\\n\", PHP_INT_MAX);\n?>")).toMatchSnapshot();
  });
});
