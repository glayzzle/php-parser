// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug76437.phpt
  it("Bug #76437 (token_get_all with TOKEN_PARSE flag fails to recognise close tag)", function () {
    expect(parser.parseCode("<?php\n$tests = [\n    ['<?=$a?>', 0],\n    ['<?php echo 2; ?>', 6],\n    [\"<?php echo 2; ?>\\n\", 6],\n];\nforeach ($tests as [$code, $index]) {\n    $open_tag1 = token_get_all($code)[$index];\n    $open_tag2 = token_get_all($code, TOKEN_PARSE)[$index];\n    echo token_name($open_tag1[0]), \": \\\"$open_tag1[1]\\\" on line $open_tag1[2]\\n\";\n    var_dump($open_tag1 === $open_tag2);\n}\n?>")).toMatchSnapshot();
  });
});
