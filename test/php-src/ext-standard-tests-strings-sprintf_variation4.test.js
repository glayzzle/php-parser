// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation4.phpt
  it("sprintf %u With signed integer 32bit", function () {
    expect(parser.parseCode("<?php\n/* example#5: various examples */\n$n =  43951789;\n$u = -43951789;\n// notice the double %%, this prints a literal '%' character\nvar_dump(sprintf(\"%%u = '%u'\", $n)); // unsigned integer representation of a positive integer\nvar_dump(sprintf(\"%%u = '%u'\", $u)); // unsigned integer representation of a negative integer\n?>")).toMatchSnapshot();
  });
});
