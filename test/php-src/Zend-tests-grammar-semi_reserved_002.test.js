// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/semi_reserved_002.phpt
  it("Test semi-reserved words as static class methods", function () {
    expect(parser.parseCode("<?php\nclass Obj\n{\n    static function empty(){ echo __METHOD__, PHP_EOL; }\n    static function callable(){ echo __METHOD__, PHP_EOL; }\n    static function class(){ echo __METHOD__, PHP_EOL; }\n    static function trait(){ echo __METHOD__, PHP_EOL; }\n    static function extends(){ echo __METHOD__, PHP_EOL; }\n    static function implements(){ echo __METHOD__, PHP_EOL; }\n    static function static(){ echo __METHOD__, PHP_EOL; }\n    static function abstract(){ echo __METHOD__, PHP_EOL; }\n    static function final(){ echo __METHOD__, PHP_EOL; }\n    static function public(){ echo __METHOD__, PHP_EOL; }\n    static function protected(){ echo __METHOD__, PHP_EOL; }\n    static function private(){ echo __METHOD__, PHP_EOL; }\n    static function const(){ echo __METHOD__, PHP_EOL; }\n    static function enddeclare(){ echo __METHOD__, PHP_EOL; }\n    static function endfor(){ echo __METHOD__, PHP_EOL; }\n    static function endforeach(){ echo __METHOD__, PHP_EOL; }\n    static function endif(){ echo __METHOD__, PHP_EOL; }\n    static function endwhile(){ echo __METHOD__, PHP_EOL; }\n    static function and(){ echo __METHOD__, PHP_EOL; }\n    static function global(){ echo __METHOD__, PHP_EOL; }\n    static function goto(){ echo __METHOD__, PHP_EOL; }\n    static function instanceof(){ echo __METHOD__, PHP_EOL; }\n    static function insteadof(){ echo __METHOD__, PHP_EOL; }\n    static function interface(){ echo __METHOD__, PHP_EOL; }\n    static function namespace(){ echo __METHOD__, PHP_EOL; }\n    static function new(){ echo __METHOD__, PHP_EOL; }\n    static function or(){ echo __METHOD__, PHP_EOL; }\n    static function xor(){ echo __METHOD__, PHP_EOL; }\n    static function try(){ echo __METHOD__, PHP_EOL; }\n    static function use(){ echo __METHOD__, PHP_EOL; }\n    static function var(){ echo __METHOD__, PHP_EOL; }\n    static function exit(){ echo __METHOD__, PHP_EOL; }\n    static function list(){ echo __METHOD__, PHP_EOL; }\n    static function clone(){ echo __METHOD__, PHP_EOL; }\n    static function include(){ echo __METHOD__, PHP_EOL; }\n    static function include_once(){ echo __METHOD__, PHP_EOL; }\n    static function throw(){ echo __METHOD__, PHP_EOL; }\n    static function array(){ echo __METHOD__, PHP_EOL; }\n    static function print(){ echo __METHOD__, PHP_EOL; }\n    static function echo(){ echo __METHOD__, PHP_EOL; }\n    static function require(){ echo __METHOD__, PHP_EOL; }\n    static function require_once(){ echo __METHOD__, PHP_EOL; }\n    static function return(){ echo __METHOD__, PHP_EOL; }\n    static function else(){ echo __METHOD__, PHP_EOL; }\n    static function elseif(){ echo __METHOD__, PHP_EOL; }\n    static function default(){ echo __METHOD__, PHP_EOL; }\n    static function break(){ echo __METHOD__, PHP_EOL; }\n    static function continue(){ echo __METHOD__, PHP_EOL; }\n    static function switch(){ echo __METHOD__, PHP_EOL; }\n    static function yield(){ echo __METHOD__, PHP_EOL; }\n    static function function(){ echo __METHOD__, PHP_EOL; }\n    static function fn(){ echo __METHOD__, PHP_EOL; }\n    static function if(){ echo __METHOD__, PHP_EOL; }\n    static function endswitch(){ echo __METHOD__, PHP_EOL; }\n    static function finally(){ echo __METHOD__, PHP_EOL; }\n    static function for(){ echo __METHOD__, PHP_EOL; }\n    static function foreach(){ echo __METHOD__, PHP_EOL; }\n    static function declare(){ echo __METHOD__, PHP_EOL; }\n    static function case(){ echo __METHOD__, PHP_EOL; }\n    static function do(){ echo __METHOD__, PHP_EOL; }\n    static function while(){ echo __METHOD__, PHP_EOL; }\n    static function as(){ echo __METHOD__, PHP_EOL; }\n    static function catch(){ echo __METHOD__, PHP_EOL; }\n    static function die(){ echo __METHOD__, PHP_EOL; }\n    static function self(){ echo __METHOD__, PHP_EOL; }\n    static function parent(){ echo __METHOD__, PHP_EOL; }\n    static function isset(){ echo __METHOD__, PHP_EOL; }\n    static function unset(){ echo __METHOD__, PHP_EOL; }\n    static function __CLASS__(){ echo __METHOD__, PHP_EOL; }\n    static function __TRAIT__(){ echo __METHOD__, PHP_EOL; }\n    static function __FUNCTION__(){ echo __METHOD__, PHP_EOL; }\n    static function __METHOD__(){ echo __METHOD__, PHP_EOL; }\n    static function __LINE__(){ echo __METHOD__, PHP_EOL; }\n    static function __FILE__(){ echo __METHOD__, PHP_EOL; }\n    static function __DIR__(){ echo __METHOD__, PHP_EOL; }\n    static function __NAMESPACE__(){ echo __METHOD__, PHP_EOL; }\n}\nObj::empty();\nObj::callable();\nObj::class();\nObj::trait();\nObj::extends();\nObj::implements();\nObj::static();\nObj::abstract();\nObj::final();\nObj::public();\nObj::protected();\nObj::private();\nObj::const();\nObj::enddeclare();\nObj::endfor();\nObj::endforeach();\nObj::endif();\nObj::endwhile();\nObj::and();\nObj::global();\nObj::goto();\nObj::instanceof();\nObj::insteadof();\nObj::interface();\nObj::namespace();\nObj::new();\nObj::or();\nObj::xor();\nObj::try();\nObj::use();\nObj::var();\nObj::exit();\nObj::list();\nObj::clone();\nObj::include();\nObj::include_once();\nObj::throw();\nObj::array();\nObj::print();\nObj::echo();\nObj::require();\nObj::require_once();\nObj::return();\nObj::else();\nObj::elseif();\nObj::default();\nObj::break();\nObj::continue();\nObj::switch();\nObj::yield();\nObj::function();\nObj::fn();\nObj::if();\nObj::endswitch();\nObj::finally();\nObj::for();\nObj::foreach();\nObj::declare();\nObj::case();\nObj::do();\nObj::while();\nObj::as();\nObj::catch();\nObj::die();\nObj::self();\nObj::parent();\nObj::isset();\nObj::unset();\nObj::__CLASS__();\nObj::__TRAIT__();\nObj::__FUNCTION__();\nObj::__METHOD__();\nObj::__LINE__();\nObj::__FILE__();\nObj::__DIR__();\nObj::__NAMESPACE__();\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
