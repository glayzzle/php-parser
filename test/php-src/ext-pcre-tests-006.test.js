// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/006.phpt
  it("preg_replace() with array of failing regular expressions", function () {
    expect(parser.parseCode("<?php\n$text = '[CODE]&lt;td align=&quot;$stylevar[right]&quot;&gt;[/CODE]';\n$result = preg_replace(array('#\\[(right)\\](((?R)|[^[]+?|\\[)*)\\[/\\\\1\\]#siU', '#\\[(right)\\](((?R)|[^[]+?|\\[)*)\\[/\\\\1\\]#siU'), '', $text);\nvar_dump($text);\nvar_dump($result);\n$result = preg_replace('#\\[(right)\\](((?R)|[^[]+?|\\[)*)\\[/\\\\1\\]#siU', '', $text);\nvar_dump($text);\nvar_dump($result);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
