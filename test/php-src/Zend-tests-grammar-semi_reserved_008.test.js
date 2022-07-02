// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/semi_reserved_008.phpt
  it("Testing with comments around semi-reserved names (not intended to be legible)", function () {
    expect(parser.parseCode("<?php\ntrait TraitA\n{\n    public static function list(){ echo __METHOD__, PHP_EOL; }\n    public static function /* comment */ catch(){ echo __METHOD__, PHP_EOL; }\n    private static function // comment\n        throw(){ echo __METHOD__, PHP_EOL; }\n    private static function\n    # comment\n    self(){ echo __METHOD__, PHP_EOL; }\n}\ntrait TraitB\n{\n    public static function exit(){ echo __METHOD__, PHP_EOL; }\n    protected static function try(){ echo __METHOD__, PHP_EOL; }\n}\nclass Foo\n{\n    use TraitA {\n        TraitA::\n            //\n            /** doc comment */\n            #\n        catch /* comment */\n            // comment\n            # comment\n        insteadof TraitB;\n        TraitA::list as public /**/ foreach;\n    }\n    use TraitB {\n        try /*comment*/ as public attempt;\n        exit // comment\n            as/*comment*/die; // non qualified\n        \\TraitB::exit as bye; // full qualified\n        namespace\\TraitB::exit #\n        as byebye; // even more full qualified\n        TraitB\n            ::\n            /**  */\n            exit as farewell; // full qualified with weird spacing\n    }\n}\nFoo /**/\n#\n//\n/**  */\n::\n/**/\n#\n//\n/**  */\nattempt();\necho PHP_EOL, \"Done\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
