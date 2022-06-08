// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/semi_reserved_006.phpt
  it("Test semi-reserved method and constant names and trait conflict resolution", function () {
    expect(parser.parseCode("<?php\ntrait TraitA\n{\n    public function catch(){ echo __METHOD__, PHP_EOL; }\n    private function list(){ echo __METHOD__, PHP_EOL; }\n}\ntrait TraitB\n{\n    static $list = ['a' => ['b' => ['c']]];\n    public static function catch(){ echo __METHOD__, PHP_EOL; }\n    private static function throw(){ echo __METHOD__, PHP_EOL; }\n    private static function self(){ echo __METHOD__, PHP_EOL; }\n}\ntrait TraitC\n{\n    public static function exit(){ echo __METHOD__, PHP_EOL; }\n    protected static function try(){ echo __METHOD__, PHP_EOL; }\n}\nclass Foo\n{\n    use TraitA, TraitB {\n        TraitA\n            ::\n            catch insteadof namespace\\TraitB;\n        TraitA::list as public foreach;\n        TraitB::throw as public;\n        TraitB::self as public;\n    }\n    use TraitC {\n        try as public attempt;\n        exit as die;\n        \\TraitC::exit as bye;\n        namespace\\TraitC::exit as byebye;\n        TraitC\n            ::\n            exit as farewell;\n    }\n}\n(new Foo)->catch();\n(new Foo)->foreach();\nFoo::throw();\nFoo::self();\nvar_dump(Foo::$list['a']);\nFoo::attempt();\nFoo::die();\nFoo::bye();\nFoo::byebye();\nFoo::farewell();\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
