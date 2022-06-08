// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/print_basic.phpt
  it("Test print() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing print() : basic functionality ***\\n\";\necho \"\\n-- Iteration 1 --\\n\";\nprint(\"Hello World\");\necho \"\\n-- Iteration 2 --\\n\";\nprint \"print() also works without parentheses.\";\necho \"\\n-- Iteration 3 --\\n\";\nprint \"This spans\nmultiple lines. The newlines will be\noutput as well\";\necho \"\\n-- Iteration 4 --\\n\";\nprint \"This also spans\\nmultiple lines. The newlines will be\\noutput as well.\";\necho \"\\n-- Iteration 5 --\\n\";\nprint \"escaping characters is done \\\"Like this\\\".\";\n// You can use variables inside of a print statement\n$foo = \"foobar\";\n$bar = \"barbaz\";\necho \"\\n-- Iteration 6 --\\n\";\nprint \"foo is $foo\"; // foo is foobar\n// You can also use arrays\n$bar = array(\"value\" => \"foo\");\necho \"\\n-- Iteration 7 --\\n\";\nprint \"this is {$bar['value']} !\"; // this is foo !\n// Using single quotes will print the variable name, not the value\necho \"\\n-- Iteration 8 --\\n\";\nprint 'foo is $foo'; // foo is $foo\n// If you are not using any other characters, you can just print variables\necho \"\\n-- Iteration 9 --\\n\";\nprint $foo;          // foobar\necho \"\\n-- Iteration 10 --\\n\";\n$variable = \"VARIABLE\";\nprint <<<END\nThis uses the \"here document\" syntax to output\nmultiple lines with $variable interpolation. Note\nthat the here document terminator must appear on a\nline with just a semicolon no extra whitespace!\\n\nEND;\n?>")).toMatchSnapshot();
  });
});
