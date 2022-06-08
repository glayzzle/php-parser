// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug42233.phpt
  it("Bug #42233 (extract(): scandic characters not allowed as variable name)", function () {
    expect(parser.parseCode("<?php\n$test = array(\n    'a'     => '1',\n    'æ'     => '2',\n    'æøåäö' => '3',\n);\nvar_dump($test);\nvar_dump(extract($test));\nvar_dump($a);\nvar_dump($æ);\nvar_dump($æøåäö);\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
