// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/intl_icu_version_constant.phpt
  it("INTL_ICU_VERSION constant", function () {
    expect(parser.parseCode("<?php\nvar_dump(defined(\"INTL_ICU_VERSION\"));\n?>")).toMatchSnapshot();
  });
});
