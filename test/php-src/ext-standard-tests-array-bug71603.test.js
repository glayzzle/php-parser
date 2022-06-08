// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug71603.phpt
  it("Bug #71603 (compact() maintains references in php7)", function () {
    expect(parser.parseCode("<?php\n$foo = \"okey\";\n$foo_reference =& $foo;\n$array = compact('foo_reference');\n$foo = 'changed!';\nvar_dump($array['foo_reference']);\n?>")).toMatchSnapshot();
  });
});
