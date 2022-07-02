// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closures/closure_from_callable_error.phpt
  it("Testing Closure::fromCallable() functionality: Errors", function () {
    expect(parser.parseCode("<?php\ninclude('closure_from_callable.inc');\necho 'Cannot access privateInstance method statically'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable(['Foo', 'privateInstanceFunc']);\n    echo \"Test failed to fail and return was : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Cannot access privateInstance method statically with colon scheme'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable('Foo::privateInstanceFunc');\n    echo \"Test failed to fail and return was : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Cannot access privateInstance method'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable([new Foo, 'privateInstanceFunc']);\n    echo \"Test failed to fail and return was : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'SubClass cannot access private instance method'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable([new SubFoo, 'privateInstanceFunc']);\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Cannot access private static function of instance'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable([new Foo, 'privateStaticFunction']);\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Cannot access private static method statically'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable(['Foo', 'privateStaticFunction']);\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Cannot access private static method statically with colon scheme'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable('Foo::privateStaticFunction');\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Non-existent method should fail'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable('Foo::nonExistentFunction');\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Non-existent class should fail'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable(['NonExistentClass', 'foo']);\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Non-existent function should fail'.\"\\n\";\ntry {\n    $fn = Closure::fromCallable('thisDoesNotExist');\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Subclass cannot closure over parent private instance method'.\"\\n\";\ntry {\n    $subFoo = new SubFoo;\n    $fn = $subFoo->closePrivateInvalid();\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Subclass cannot closure over parant private static method'.\"\\n\";\ntry {\n    $subFoo = new SubFoo;\n    $fn = $subFoo->closePrivateStaticInvalid();\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Function scope cannot closure over protected instance method'.\"\\n\";\ntry {\n    $fn = functionAccessProtected();\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Function scope cannot closure over private instance method'.\"\\n\";\ntry {\n    $fn = functionAccessPrivate();\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho 'Access private instance method of parent object through \"self::\" to parent method'.\"\\n\";\ntry {\n    $foo = new SubFoo;\n    $fn = $foo->getSelfColonParentPrivateInstanceMethod();\n    echo \"Test failed to fail, closure is : \".var_export($fn, true).\"\\n\";\n}\ncatch (\\TypeError $te) {\n    //This is the expected outcome.\n}\ncatch (\\Throwable $t) {\n    echo \"Wrong exception type thrown: \".get_class($t).\" : \".$t->getMessage().\"\\n\";\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
