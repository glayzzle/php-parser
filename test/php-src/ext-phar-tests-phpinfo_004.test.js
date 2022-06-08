// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phpinfo_004.phpt
  it("Phar: phpinfo display 4", function () {
    expect(parser.parseCode("<?php\nphpinfo(INFO_MODULES);\nini_set('phar.readonly',1);\nini_set('phar.require_hash',1);\nphpinfo(INFO_MODULES);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
