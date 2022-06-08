// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-nowdoc-lineno.phpt
  it("Flexible heredoc lineno: ensure the compiler globals line number is correct", function () {
    expect(parser.parseCode("<?php\n$heredoc = <<<EOT\nhello world\nEOT;\n$heredoc = <<<'EOT'\nhello world\nEOT;\n$heredoc = <<<EOT\n hello world\n EOT;\n$heredoc = <<<'EOT'\n hello world\n EOT;\ntry {\n\tthrow new exception();\n} catch (Exception $e) {\n\tvar_dump($e->getLine());\n}\n?>")).toMatchSnapshot();
  });
});
