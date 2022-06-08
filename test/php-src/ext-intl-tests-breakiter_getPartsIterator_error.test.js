// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_getPartsIterator_error.phpt
  it("IntlBreakIterator::getPartsIterator(): bad args", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.default_locale\", \"pt_PT\");\n$it = IntlBreakIterator::createWordInstance(NULL);\ntry {\n    var_dump($it->getPartsIterator(-1));\n} catch(\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
