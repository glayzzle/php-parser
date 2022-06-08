// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/bug78297.phpt
  it("Bug #78297: Include unexistent file memory leak", function () {
    expect(parser.parseCode("<?php\ninclude \"does_not_exist.php\";")).toMatchSnapshot();
  });
});
