// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/setlocale_variation5.phpt
  it("Test setlocale() function : usage variations - Setting system locale as empty string", function () {
    expect(parser.parseCode("<?php\n/* If locale is empty string \"\", the locale names will be set from the values of environment variables with the same names as from ENV */\necho \"*** Testing setlocale() : usage variations - setting system locale = \\\"\\\" ***\\n\";\n//initially setting the locale\nsetlocale(LC_ALL,'en_AU.utf8');\necho \"Locale info, before setting the locale\\n\";\n//returns current locale,before executing setlocale() .\n$locale_info_before = localeconv();\nvar_dump($locale_info_before);\n//Testing setlocale()  by giving locale = null\necho \"Setting system locale, category = LC_ALL and locale = \\\"\\\"\\n\";\nsetlocale(LC_ALL, \"\");\necho \"Locale info, after setting the locale\\n\";\n//Returns Current locale,after executing setlocale().\n$locale_info_after = localeconv();\nvar_dump($locale_info_after);\necho \"Checking new locale in the system, Expected : the locale names will be set from the values of environment variables\\n\";\necho \"Test \";\nif($locale_info_before != $locale_info_after){\n  echo \"PASSED.\";\n} else {\n  echo \"FAILED.\";\n}\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
