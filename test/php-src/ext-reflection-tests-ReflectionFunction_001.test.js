// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_001.phpt
  it("ReflectionFunction methods", function () {
    expect(parser.parseCode("<?php\n/**\n * my doc comment\n */\nfunction foo () {\n    static $c;\n    static $a = 1;\n    static $b = \"hello\";\n    $d = 5;\n}\n/***\n * not a doc comment\n */\nfunction bar () {}\nfunction dumpFuncInfo($name) {\n    $funcInfo = new ReflectionFunction($name);\n    var_dump($funcInfo->getName());\n    var_dump($funcInfo->isInternal());\n    var_dump($funcInfo->isUserDefined());\n    var_dump($funcInfo->getStartLine());\n    var_dump($funcInfo->getEndLine());\n    var_dump($funcInfo->getStaticVariables());\n}\ndumpFuncInfo('foo');\ndumpFuncInfo('bar');\ndumpFuncInfo('extract');\n?>")).toMatchSnapshot();
  });
});
