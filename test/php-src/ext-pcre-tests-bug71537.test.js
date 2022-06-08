// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug71537.phpt
  it("Fixed bug #71537 (PCRE segfault from Opcache)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_replace(array(\"/Monkey/\"), array(2016), \"Happy Year of Monkey\"));\n?>")).toMatchSnapshot();
  });
});
