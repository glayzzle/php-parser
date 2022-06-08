// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_dgettext.phpt
  it("Test dgettext() functionality", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nputenv('LC_MESSAGES=en_US.UTF-8');\nsetlocale(LC_MESSAGES, 'en_US.UTF-8');\nputenv('LC_ALL=en_US.UTF-8');\nsetlocale(LC_ALL, 'en_US.UTF-8');\nbindtextdomain('dgettextTest', './locale');\nbindtextdomain('dgettextTest_switch', './locale');\ntextdomain('dgettextTest');\nvar_dump(gettext('item'));\nvar_dump(dgettext('dgettextTest_switch', 'item'));\nvar_dump(gettext('item'));\n?>")).toMatchSnapshot();
  });
});
