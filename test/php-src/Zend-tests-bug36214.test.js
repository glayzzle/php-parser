// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug36214.phpt
  it("Bug #36214 (__get method works properly only when conditional operator is used)", function () {
    expect(parser.parseCode("<?php\nclass context {\n  public $stack = array();\n  public function __set($name,$var) {\n    $this->stack[$name] = $var;return;\n  }\n  public function &__get($name) {\n    return $this->stack[$name];\n  }\n}\n$ctx = new context;\n$ctx->comment_preview = array();\n$ctx->comment_preview[0] = 1;\n$ctx->comment_preview[1] = 2;\nvar_dump($ctx->comment_preview);\n$comment_preview = array();\n$comment_preview[0] = 1;\n$comment_preview[1] = 2;\n$ctx->comment_preview = $comment_preview;\nvar_dump($ctx->comment_preview);\n$ctx->comment_preview = new ArrayObject();\n$ctx->comment_preview[0] = 1;\n$ctx->comment_preview[1] = 2;\nvar_dump($ctx->comment_preview);\n?>")).toMatchSnapshot();
  });
});
