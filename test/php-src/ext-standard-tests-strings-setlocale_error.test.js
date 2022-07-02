// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/setlocale_error.phpt
  it("Test setlocale() function : error condition", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing setlocale() : error conditions ***\\n\";\necho \"\\n-- Testing setlocale() function with invalid locale array, 'category' = LC_ALL --\\n\";\n//Invalid array of locales\n$invalid_locales = array(\"en_US.invalid\", \"en_AU.invalid\", \"ko_KR.invalid\");\nvar_dump( setlocale(LC_ALL,$invalid_locales) );\necho \"\\n-- Testing setlocale() function with invalid multiple locales, 'category' = LC_ALL --\\n\";\n//Invalid array of locales\nvar_dump( setlocale(LC_ALL,\"en_US.invalid\", \"en_AU.invalid\", \"ko_KR.invalid\") );\necho \"\\n-- Testing setlocale() function with locale name too long, 'category' = LC_ALL --\";\n//Invalid locale - locale name too long\nvar_dump(setlocale(LC_ALL,str_pad('',255,'A')));\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
