// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug36424.phpt
  it("Bug #36424 - Serializable interface breaks object references", function () {
    expect(parser.parseCode("<?php\nclass a implements Serializable {\n    function serialize() {\n        return serialize(get_object_vars($this));\n    }\n    function unserialize($s) {\n        foreach (unserialize($s) as $p=>$v) {\n            $this->$p=$v;\n        }\n    }\n}\nclass b extends a {}\nclass c extends b {}\n$c = new c;\n$c->a = new a;\n$c->a->b = new b;\n$c->a->b->c = $c;\n$c->a->c = $c;\n$c->a->b->a = $c->a;\n$c->a->a = $c->a;\n$s = serialize($c);\nprintf(\"%s\\n\", $s);\n$d = unserialize($s);\nvar_dump(\n    $d === $d->a->b->c,\n    $d->a->a === $d->a,\n    $d->a->b->a === $d->a,\n    $d->a->c === $d\n);\nprint_r($d);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
