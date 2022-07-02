// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/setlocale_variation3.phpt
  it("Test setlocale() function : usage variations - setting system locale = 0", function () {
    expect(parser.parseCode("<?php\n/* If locale is \"0\", the locale setting is not affected, only the current setting is returned */\necho \"*** Testing setlocale() : usage variations - setting system locale = 0 ***\\n\";\n$locale_info_before = array();\n$locale_info_after = array();\n//initially giving the locale\nsetlocale(LC_ALL,\"en_US.utf8\");\necho \"Locale info, before setting the locale\\n\";\n//returns current locale,before executing setlocale().\n$locale_info_before = localeconv();\nvar_dump($locale_info_before);\n//Testing setlocale()  by giving locale = 0\necho \"Setting system locale, category = LC_ALL and locale = 0\\n\";\nsetlocale(LC_ALL, 0);\necho \"Locale info, after setting the locale\\n\";\n//returns current locale,after executing setlocale().\n$locale_info_after = localeconv();\nvar_dump($locale_info_after);\necho \"Checking locale in the system, Expected : no change in the existing locale\\n\";\necho \"Test \";\nif($locale_info_before ==  $locale_info_after){\n  echo \"PASSED.\";\n} else {\n  echo \"FAILED.\";\n}\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
