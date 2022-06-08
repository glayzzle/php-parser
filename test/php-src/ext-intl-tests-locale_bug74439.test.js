// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale_bug74439.phpt
  it("Bug #74439 Wrong reflection on the Locale methods", function () {
    expect(parser.parseCode("<?php\n$methods = [\n'getDefault',\n'acceptFromHttp',\n'canonicalize',\n'composeLocale',\n'getAllVariants',\n'getKeywords',\n'getPrimaryLanguage',\n'getRegion',\n'getScript',\n'parseLocale',\n'setDefault',\n'getDisplayLanguage',\n'getDisplayName',\n'getDisplayRegion',\n'getDisplayScript',\n'getDisplayVariant',\n'filterMatches',\n'lookup',\n];\nforeach ($methods as $method) {\n    $rm = new ReflectionMethod(Locale::class, $method);\n    printf(\"%s: %d, %d\\n\", $method, $rm->getNumberOfParameters(), $rm->getNumberOfRequiredParameters());\n}\n?>")).toMatchSnapshot();
  });
});
