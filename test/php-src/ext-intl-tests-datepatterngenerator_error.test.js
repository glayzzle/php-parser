// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/datepatterngenerator_error.phpt
  it("IntlDatePatternGenerator::getBestPattern(): errors", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$dtpg = new IntlDatePatternGenerator();\nvar_dump($dtpg->getBestPattern(\"jjmm\\x80\"));\n?>")).toMatchSnapshot();
  });
});
