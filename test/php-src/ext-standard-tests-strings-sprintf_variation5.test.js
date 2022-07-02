// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation5.phpt
  it("sprintf With signed integer", function () {
    expect(parser.parseCode("<?php\n/* example#5: various examples */\n$n =  43951789;\n$u = -43951789;\n$c = 65; // ASCII 65 is 'A'\n// notice the double %%, this prints a literal '%' character\nvar_dump(sprintf(\"%%b = '%b'\", $n)); // binary representation\nvar_dump(sprintf(\"%%c = '%c'\", $c)); // print the ascii character, same as chr() function\nvar_dump(sprintf(\"%%d = '%d'\", $n)); // standard integer representation\nvar_dump(sprintf(\"%%e = '%e'\", $n)); // scientific notation\nvar_dump(sprintf(\"%%f = '%f'\", $n)); // floating point representation\nvar_dump(sprintf(\"%%o = '%o'\", $n)); // octal representation\nvar_dump(sprintf(\"%%s = '%s'\", $n)); // string representation\nvar_dump(sprintf(\"%%x = '%x'\", $n)); // hexadecimal representation (lower-case)\nvar_dump(sprintf(\"%%X = '%X'\", $n)); // hexadecimal representation (upper-case)\nvar_dump(sprintf(\"%%+d = '%+d'\", $n)); // sign specifier on a positive integer\nvar_dump(sprintf(\"%%+d = '%+d'\", $u)); // sign specifier on a negative integer\n?>")).toMatchSnapshot();
  });
});
