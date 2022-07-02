// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/similar_text_basic.phpt
  it("similar_text(), basic tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(similar_text(\"abcdefgh\", \"efg\"));\nvar_dump(similar_text(\"abcdefgh\", \"mno\"));\nvar_dump(similar_text(\"abcdefghcc\", \"c\"));\nvar_dump(similar_text(\"abcdefghabcdef\", \"zzzzabcdefggg\"));\n$percent = 0;\nsimilar_text(\"abcdefgh\", \"efg\", $percent);\nvar_dump($percent);\nsimilar_text(\"abcdefgh\", \"mno\", $percent);\nvar_dump($percent);\nsimilar_text(\"abcdefghcc\", \"c\", $percent);\nvar_dump($percent);\nsimilar_text(\"abcdefghabcdef\", \"zzzzabcdefggg\", $percent);\nvar_dump($percent);\n?>")).toMatchSnapshot();
  });
});
