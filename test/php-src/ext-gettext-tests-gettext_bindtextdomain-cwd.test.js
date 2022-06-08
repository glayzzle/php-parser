// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_bindtextdomain-cwd.phpt
  it("Test if bindtextdomain() returns string id if no directory path is set(if directory path is 'null')", function () {
    expect(parser.parseCode("<?php\n$base_dir = __DIR__;\nchdir($base_dir);\nputenv('LC_ALL=en_US.UTF-8');\nsetlocale(LC_ALL, 'en_US.UTF-8');\nbindtextdomain('messages',null);\nvar_dump(gettext('Basic test'));\nbindtextdomain('messages', './locale');\nvar_dump(gettext('Basic test'));\n?>")).toMatchSnapshot();
  });
});
