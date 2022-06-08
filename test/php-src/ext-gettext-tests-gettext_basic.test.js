// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_basic.phpt
  it("Gettext basic test", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nputenv('LC_ALL=fi_FI');\nsetlocale(LC_ALL, 'fi_FI');\nbindtextdomain (\"messages\", \"./locale\");\ntextdomain (\"messages\");\necho gettext(\"Basic test\"), \"\\n\";\necho _(\"Basic test\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
