// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/spoofchecker_unknown_restriction_level.phpt
  it("Spoofchecker attempting to pass an unknown restriction level", function () {
    expect(parser.parseCode("<?php\n$x = new Spoofchecker();\ntry {\n    $x->setRestrictionLevel(Spoofchecker::SINGLE_SCRIPT);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
