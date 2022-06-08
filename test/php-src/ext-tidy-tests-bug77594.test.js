// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/bug77594.phpt
  it("Bug #77594 (ob_tidyhandler is never reset)", function () {
    expect(parser.parseCode("<?php\nob_start('ob_tidyhandler');\nvar_dump(ob_end_clean());\n?>")).toMatchSnapshot();
  });
});
