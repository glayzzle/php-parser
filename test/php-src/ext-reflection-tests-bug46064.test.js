// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug46064.phpt
  it("Bug #46064 (Exception when creating ReflectionProperty object on dynamicly created property)", function () {
    expect(parser.parseCode("<?php\nclass x {\n    public $zzz = 2;\n}\n$o = new x;\n$o->z = 1000;\n$o->zzz = 3;\nvar_dump($h = new reflectionproperty($o, 'z'));\nvar_dump($h->isDefault());\nvar_dump($h->isPublic());\nvar_dump($h->isStatic());\nvar_dump($h->getName());\nvar_dump(Reflection::getModifierNames($h->getModifiers()));\nvar_dump($h->getValue($o));\nprint \"---------------------------\\n\";\ntry {\n    var_dump(new reflectionproperty($o, 'zz'));\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\nvar_dump(new reflectionproperty($o, 'zzz'));\nclass test {\n    protected $a = 1;\n}\nclass bar extends test {\n    public function __construct() {\n        $this->foobar = 2;\n        $this->a = 200;\n        $p = new reflectionproperty($this, 'foobar');\n        var_dump($p->getValue($this), $p->isDefault(), $p->isPublic());\n    }\n}\nnew bar;\n?>")).toMatchSnapshot();
  });
});
