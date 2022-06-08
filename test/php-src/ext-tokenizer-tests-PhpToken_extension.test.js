// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/PhpToken_extension.phpt
  it("Extending the PhpToken class", function () {
    expect(parser.parseCode("<?php\n$code = <<<'PHP'\n<?PHP\nFUNCTION FOO() {\n    ECHO \"bar\";\n}\nPHP;\nclass MyPhpToken extends PhpToken {\n    public int $extra = 123;\n    public function getLoweredText(): string {\n        return strtolower($this->text);\n    }\n}\nforeach (MyPhpToken::tokenize($code) as $token) {\n    echo $token->getLoweredText();\n    if ($token->extra !== 123) {\n        echo \"Missing property!\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
