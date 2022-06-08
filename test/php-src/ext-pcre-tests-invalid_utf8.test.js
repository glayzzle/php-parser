// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/invalid_utf8.phpt
  it("preg_replace() and invalid UTF8", function () {
    expect(parser.parseCode("<?php\n$string = urldecode(\"search%e4\");\n$result = preg_replace(\"#(&\\#x*)([0-9A-F]+);*#iu\",\"$1$2;\",$string);\nvar_dump($result);\nvar_dump(preg_last_error());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
