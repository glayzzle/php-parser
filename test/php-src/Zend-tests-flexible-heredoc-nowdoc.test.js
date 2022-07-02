// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-nowdoc.phpt
  it("Flexible heredoc/nowdoc syntax", function () {
    expect(parser.parseCode("<?php\n$test = 'c';\nvar_dump(<<<'END'\n END);\nvar_dump(<<<END\n  END);\n// Insufficient indentation is fine if the line is whitespace-only\n// Using eval() here to avoid issue with trailing whitespace trimming\nvar_dump(eval(\"return <<<END\n\\x20\n\\x20\\x20END;\"));\necho <<<'END'\n     a\n    b\n   c\n  d\n e\n END, PHP_EOL;\necho <<<END\n\t    a\n\t   b\n\t  $test\n\t d\n\te\n\tEND, PHP_EOL;\necho <<<'END'\n    a\n   b\n  c\n d\ne\nEND, PHP_EOL;\necho <<<END\n\ta\\r\\n\n\\ta\\n\n   b\\r\\n\n  $test\\n\n d\\r\\n\ne\\n\nEND, PHP_EOL;\necho <<<'END'\n    a\n   b\n  c\n d\ne\nEND, PHP_EOL;\n$var = 'Bar';\nvar_dump(<<<TEST\n$var\nTEST);\n$var = 'Bar';\nvar_dump(<<<TEST\n$var\nTEST);\n?>")).toMatchSnapshot();
  });
});
