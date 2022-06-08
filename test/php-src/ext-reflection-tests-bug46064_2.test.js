// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug46064_2.phpt
  it("Bug #46064.2 (Exception when creating ReflectionProperty object on dynamicly created property)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n}\n$x = new foo;\n$x->test = 2000;\n$p = new ReflectionObject($x);\nvar_dump($p->getProperty('test'));\nclass bar {\n    public function __construct() {\n        $this->a = 1;\n    }\n}\nclass test extends bar {\n    private $b = 2;\n    public function __construct() {\n        parent::__construct();\n        $p = new reflectionobject($this);\n        var_dump($h = $p->getProperty('a'));\n        var_dump($h->isDefault(), $h->isProtected(), $h->isPrivate(), $h->isPublic(), $h->isStatic());\n        var_dump($p->getProperties());\n    }\n}\nnew test;\n?>")).toMatchSnapshot();
  });
});
