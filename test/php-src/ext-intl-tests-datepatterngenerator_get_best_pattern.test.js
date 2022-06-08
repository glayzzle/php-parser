// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/datepatterngenerator_get_best_pattern.phpt
  it("IntlDatePatternGenerator::getBestPattern()", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"en_US\");\n$dtpg = new IntlDatePatternGenerator();\n$dtpg2 = new IntlDatePatternGenerator(\"de_DE\");\n$dtpg3 = IntlDatePatternGenerator::create();\n$dtpg4 = IntlDatePatternGenerator::create(\"de_DE\");\necho $dtpg->getBestPattern(\"jjmm\"), \"\\n\";\necho $dtpg2->getBestPattern(\"jjmm\"), \"\\n\";\necho $dtpg3->getBestPattern(\"YYYYMMMdd\"), \"\\n\";\necho $dtpg4->getBestPattern(\"YYYYMMMdd\"), \"\\n\";\necho $dtpg->getBestPattern(\"\"), \"\\n\";\ntry {\n    $dtpg->getBestPattern();\n} catch(\\ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
