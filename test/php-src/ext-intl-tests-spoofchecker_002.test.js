// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/spoofchecker_002.phpt
  it("spoofchecker confusable tests", function () {
    expect(parser.parseCode("<?php\n$url = \"http://www.payp\\xD0\\xB0l.com\";\n$x = new Spoofchecker();\necho \"Checking if words are confusable\\n\";\nvar_dump($x->areConfusable(\"hello, world\", \"goodbye, world\"));\nvar_dump($x->areConfusable(\"hello, world\", \"hello, world\"));\nvar_dump($x->areConfusable(\"hello, world\", \"he11o, wor1d\"));\n?>")).toMatchSnapshot();
  });
});
