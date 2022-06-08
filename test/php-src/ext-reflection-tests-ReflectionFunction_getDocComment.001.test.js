// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getDocComment.001.phpt
  it("ReflectionFunction::getDocComment()", function () {
    expect(parser.parseCode("<?php\n/**\n * my doc comment\n */\nfunction foo () {\n    static $c;\n    static $a = 1;\n    static $b = \"hello\";\n    $d = 5;\n}\n/***\n * not a doc comment\n */\nfunction bar () {}\nfunction dumpFuncInfo($name) {\n    $funcInfo = new ReflectionFunction($name);\n    var_dump($funcInfo->getDocComment());\n}\ndumpFuncInfo('foo');\ndumpFuncInfo('bar');\ndumpFuncInfo('extract');\n?>")).toMatchSnapshot();
  });
});
