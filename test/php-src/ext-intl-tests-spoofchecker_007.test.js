// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/spoofchecker_007.phpt
  it("spoofchecker with restriction level", function () {
    expect(parser.parseCode("<?php\n$x = new Spoofchecker();\n$x->setRestrictionLevel(Spoofchecker::HIGHLY_RESTRICTIVE);\n$mixed = \"\\u{91CE}\\u{7403}\\u{30FC}\";\nvar_dump($x->isSuspicious($mixed));\n$x->setRestrictionLevel(Spoofchecker::SINGLE_SCRIPT_RESTRICTIVE);\n$mixed = \"\\u{91CE}\\u{7403}\\u{30FC} abc\";\nvar_dump($x->isSuspicious($mixed));\n?>")).toMatchSnapshot();
  });
});
