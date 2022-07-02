// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24652.phpt
  it("Bug #24652 (broken array_flip())", function () {
    expect(parser.parseCode("<?php\n  /* This works */\n  $f = array('7' => 0);\n  var_dump($f);\n  var_dump(array_key_exists(7, $f));\n  var_dump(array_key_exists('7', $f));\n  print \"----------\\n\";\n  /* This doesn't */\n  $f = array_flip(array('7'));\n  var_dump($f);\n  var_dump(array_key_exists(7, $f));\n  var_dump(array_key_exists('7', $f));\n?>")).toMatchSnapshot();
  });
});
