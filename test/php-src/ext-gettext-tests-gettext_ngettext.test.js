// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_ngettext.phpt
  it("Test ngettext() functionality", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nputenv('LC_ALL=en_US.UTF-8');\nsetlocale(LC_ALL, 'en_US.UTF-8');\nbindtextdomain('dngettextTest', './locale');\ntextdomain('dngettextTest');\nvar_dump(ngettext('item', 'items', 1));\nvar_dump(ngettext('item', 'items', 2));\n?>")).toMatchSnapshot();
  });
});
