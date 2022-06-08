// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/require_parse_exception.phpt
  it("Parse exceptions when using require", function () {
    expect(parser.parseCode("<?php\nfunction test_parse_error($code) {\n    try {\n        require 'data://text/plain;base64,' . base64_encode($code);\n    } catch (ParseError $e) {\n        echo $e->getMessage(), \" on line \", $e->getLine(), \"\\n\";\n    }\n}\ntest_parse_error(<<<'EOC'\n<?php\n{ { { { { }\nEOC\n);\ntest_parse_error(<<<'EOC'\n<?php\n/** doc comment */\nfunction f() {\nEOC\n);\ntest_parse_error(<<<'EOC'\n<?php\nempty\nEOC\n);\ntest_parse_error('<?php\nvar_dump(078);');\ntest_parse_error('<?php\nvar_dump(\"\\u{xyz}\");');\ntest_parse_error('<?php\nvar_dump(\"\\u{ffffff}\");');\n?>")).toMatchSnapshot();
  });
});
