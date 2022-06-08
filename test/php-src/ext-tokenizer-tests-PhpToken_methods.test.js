// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/PhpToken_methods.phpt
  it("PhpToken instance methods", function () {
    expect(parser.parseCode("<?php\n$code = <<<'PHP'\n<?php\n// comment\n/** comment */\nfunction foo() {\n    echo \"bar\";\n}\nPHP;\n// Token names and ignorability.\n$tokens = PhpToken::tokenize($code);\nforeach ($tokens as $i => $token) {\n    printf(\"[%2d] %-26s %s\\n\", $i, $token->getTokenName(),\n        $token->isIgnorable() ? \"ignorable\" : \"meaningful\");\n}\n// is() variations\n$token = $tokens[5];\necho \"\\nSuccess:\\n\";\nvar_dump($token->is(T_FUNCTION));\nvar_dump($token->is('function'));\nvar_dump($token->is(['class', T_FUNCTION]));\nvar_dump($token->is([T_CLASS, 'function']));\necho \"\\nFailure:\\n\";\nvar_dump($token->is(T_CLASS));\nvar_dump($token->is('class'));\nvar_dump($token->is(['class', T_TRAIT]));\nvar_dump($token->is([T_CLASS, 'trait']));\necho \"\\nError:\\n\";\ntry {\n    $token->is(3.141);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $token->is([3.141]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunset($token->id);\nunset($token->text);\ntry {\n    $token->is(T_FUNCTION);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $token->is('function');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $token->is([T_FUNCTION]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $token->is(['function']);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\nName of unknown token:\\n\";\n$token = new PhpToken(100000, \"foo\");\nvar_dump($token->getTokenName());\n?>")).toMatchSnapshot();
  });
});
