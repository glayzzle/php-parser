// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/setlocale_variation4.phpt
  it("Test setlocale() function : usage variations - setting system locale as null", function () {
    expect(parser.parseCode("<?php\n/*If locale is NULL, the locale names will be set from the values of environment variables with the same names as the above ENV settings */\necho \"*** Testing setlocale() : usage variations - Setting system locale = null ***\\n\";\n//initially setting the locale\nsetlocale(LC_ALL,\"en_AU.utf8\");\necho \"Locale info, before setting the locale\\n\";\n//returns current locale,before executing setlocale() .\n$locale_info_before = localeconv();\nvar_dump($locale_info_before);\n//Testing setlocale()  by giving locale = null\necho \"Setting system locale, category = LC_ALL and locale = null\\n\";\nsetlocale(LC_ALL, null);\necho \"Locale info, after setting the locale\\n\";\n//Returns Current locale,after executing setlocale().\n$locale_info_after = localeconv();\nvar_dump($locale_info_after);\necho \"Checking new locale in the system, Expected : the locale names will be set from the values of environment variables\\n\";\necho \"Test \";\nif($locale_info_before != $locale_info_after){\n  echo \"PASSED.\";\n} else {\n  echo \"FAILED.\";\n}\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
