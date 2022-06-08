// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug48147.phpt
  it("Bug #48147 (iconv with //IGNORE cuts the string)", function () {
    expect(parser.parseCode("<?php\n$text = \"aa\\xC3\\xC3\\xC3\\xB8aa\";\nvar_dump(iconv(\"UTF-8\", \"UTF-8\", $text));\nvar_dump(urlencode(iconv(\"UTF-8\", \"UTF-8//IGNORE\", $text)));\n// only invalid\nvar_dump(urlencode(iconv(\"UTF-8\", \"UTF-8//IGNORE\", \"\\xC3\")));\n// start invalid\nvar_dump(urlencode(iconv(\"UTF-8\", \"UTF-8//IGNORE\", \"\\xC3\\xC3\\xC3\\xB8aa\")));\n// finish invalid\nvar_dump(urlencode(iconv(\"UTF-8\", \"UTF-8//IGNORE\", \"aa\\xC3\\xC3\\xC3\")));\n?>")).toMatchSnapshot();
  });
});
