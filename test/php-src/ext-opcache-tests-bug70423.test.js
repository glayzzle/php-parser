// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug70423.phpt
  it("Bug #70423 Warning Internal error: wrong size calculation", function () {
    expect(parser.parseCode("<?php\n/* forked from Zend\\tests\\bug53958.phpt */\n// TEST 1\n$a = 1;\n$fn1 = function() use ($a) {echo \"$a\\n\"; $a++;};\n$fn2 = function() use ($a) {echo \"$a\\n\"; $a++;};\n$a = 5;\n$fn1(); // 1\n$fn2(); // 1\n$fn1(); // 1\n$fn2(); // 1\n// TEST 2\n$b = 1;\n$fn1 = function() use (&$b) {echo \"$b\\n\"; $b++;};\n$fn2 = function() use (&$b) {echo \"$b\\n\"; $b++;};\n$b = 5;\n$fn1(); // 5\n$fn2(); // 6\n$fn1(); // 7\n$fn2(); // 8\n// TEST 3\n$c = 1;\n$fn1 = function() use (&$c) {echo \"$c\\n\"; $c++;};\n$fn2 = function() use ($c) {echo \"$c\\n\"; $c++;};\n$c = 5;\n$fn1(); // 5\n$fn2(); // 1\n$fn1(); // 6\n$fn2(); // 1\n// TEST 4\n$d = 1;\n$fn1 = function() use ($d) {echo \"$d\\n\"; $d++;};\n$fn2 = function() use (&$d) {echo \"$d\\n\"; $d++;};\n$d = 5;\n$fn1(); // 1\n$fn2(); // 5\n$fn1(); // 1\n$fn2(); // 6\n?>")).toMatchSnapshot();
  });
});
