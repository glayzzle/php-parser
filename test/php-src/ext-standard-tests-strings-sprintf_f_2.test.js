// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_f_2.phpt
  it("sprintf %f #2", function () {
    expect(parser.parseCode("<?php\nvar_dump(sprintf(\"%.3F\", 100.426));\nvar_dump(sprintf(\"%.2F\", 100.426));\nvar_dump(sprintf(\"%d\",   100.426));\nvar_dump(sprintf(\"%d\",   100.9));\nvar_dump(sprintf(\"%o\",   100.426));\nvar_dump(sprintf(\"%o\",   100.9));\n/* copy & paste from the docs */\n/* example#1: Argument swapping */\n$num = 100.1;\n$location = \"world\";\n$format = 'There are %d monkeys in the %s';\nvar_dump(sprintf($format, $num, $location));\n/* example#2: Argument swapping */\n$format = 'The %s contains %d monkeys';\nvar_dump(sprintf($format, $num, $location));\n/* example#3: Argument swapping */\n$format = 'The %2$s contains %1$d monkeys';\nvar_dump(sprintf($format, $num, $location));\n/* example#4: Argument swapping */\n$format = 'The %2$s contains %1$d monkeys.\n    That\\'s a nice %2$s full of %1$d monkeys.';\nvar_dump(sprintf($format, $num, $location));\n/* example#5: various examples */\n$n =  43951789;\n$u = -43951789;\n$c = 65; // ASCII 65 is 'A'\n// notice the double %%, this prints a literal '%' character\nvar_dump(sprintf(\"%%b = '%b'\", $n)); // binary representation\nvar_dump(sprintf(\"%%c = '%c'\", $c)); // print the ascii character, same as chr() function\nvar_dump(sprintf(\"%%d = '%d'\", $n)); // standard integer representation\nvar_dump(sprintf(\"%%e = '%e'\", $n)); // scientific notation\nvar_dump(sprintf(\"%%u = '%u'\", $n)); // unsigned integer representation of a positive integer\nvar_dump(sprintf(\"%%u = '%u'\", $u)); // unsigned integer representation of a negative integer\nvar_dump(sprintf(\"%%f = '%f'\", $n)); // floating point representation\nvar_dump(sprintf(\"%%o = '%o'\", $n)); // octal representation\nvar_dump(sprintf(\"%%s = '%s'\", $n)); // string representation\nvar_dump(sprintf(\"%%x = '%x'\", $n)); // hexadecimal representation (lower-case)\nvar_dump(sprintf(\"%%X = '%X'\", $n)); // hexadecimal representation (upper-case)\nvar_dump(sprintf(\"%%+d = '%+d'\", $n)); // sign specifier on a positive integer\nvar_dump(sprintf(\"%%+d = '%+d'\", $u)); // sign specifier on a negative integer\n/* example#6: string specifiers */\n$s = 'monkey';\n$t = 'many monkeys';\nvar_dump(sprintf(\"[%s]\",      $s)); // standard string output\nvar_dump(sprintf(\"[%10s]\",    $s)); // right-justification with spaces\nvar_dump(sprintf(\"[%-10s]\",   $s)); // left-justification with spaces\nvar_dump(sprintf(\"[%010s]\",   $s)); // zero-padding works on strings too\nvar_dump(sprintf(\"[%'#10s]\",  $s)); // use the custom padding character '#'\nvar_dump(sprintf(\"[%10.10s]\", $t)); // left-justification but with a cutoff of 10 characters\n/* example#7: zero-padded integers */\nvar_dump(sprintf(\"%04d-%02d-%02d\", 2006, 12, 18));\n/* example#8: formatting currency */\n$money1 = 68.75;\n$money2 = 54.35;\n$money = $money1 + $money2;\nvar_dump(sprintf(\"%01.2f\", $money)); // output \"123.10\"\n/* example#9: scientific notation */\n$number = 362525200;\nvar_dump(sprintf(\"%.3e\", $number)); // outputs 3.63e+8\n?>")).toMatchSnapshot();
  });
});
