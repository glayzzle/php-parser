// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/datepatterngenerator_clone.phpt
  it("IntlDatePatternGenerator::getBestPattern(): clone", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"en_US\");\n$dtpg = new IntlDatePatternGenerator(\"de_DE\");\necho $dtpg->getBestPattern(\"YYYYMMMddjjmm\"), \"\\n\";\n$dtpg_clone = clone $dtpg;\necho $dtpg_clone->getBestPattern(\"YYYYMMMddjjmm\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
