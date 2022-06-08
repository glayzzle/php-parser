// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_textdomain-retval.phpt
  it("Check if textdomain() returns the new domain", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nsetlocale(LC_ALL, 'en_US.UTF-8');\nbindtextdomain (\"messages\", \"./locale\");\necho textdomain('test'), \"\\n\";\necho textdomain(null), \"\\n\";\necho textdomain('foo'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
