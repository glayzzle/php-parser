// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale_bug66289.phpt
  it("Bug #66289 Locale::lookup incorrectly returns en or en_US if locale is empty", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.default_locale\", \"en-US\");\n$availableLocales = array('fr_FR', 'de', 'es_ES', 'es_419', 'en_US');\nvar_dump(locale_lookup($availableLocales, false, true, 'fr_FR'));\nvar_dump(locale_lookup($availableLocales, false, true, null));\n$availableLocales = array('fr_FR', 'de', 'es_ES', 'es_419');\nvar_dump(locale_lookup($availableLocales, false, true, 'fr_FR'));\nini_set(\"intl.default_locale\", \"de-DE\");\n$availableLocales = array(Locale::getDefault());\nvar_dump(locale_lookup($availableLocales, false, true));\n?>")).toMatchSnapshot();
  });
});
