// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_001.phpt
  it("SPL: SplFileObject::seek'ing", function () {
    expect(parser.parseCode("<?php\n$o = new SplFileObject(__DIR__ . '/fileobject_001a.txt');\nvar_dump($o->key());\nvar_dump($o->current());\n$o->setFlags(SplFileObject::DROP_NEW_LINE);\nvar_dump($o->key());\nvar_dump($o->current());\nvar_dump($o->key());\n$o->next();\nvar_dump($o->key());\nvar_dump($o->current());\nvar_dump($o->key());\n$o->rewind();\nvar_dump($o->key());\nvar_dump($o->current());\nvar_dump($o->key());\n$o->seek(4);\nvar_dump($o->key());\nvar_dump($o->current());\nvar_dump($o->key());\necho \"===A===\\n\";\nforeach($o as $n => $l)\n{\n    var_dump($n, $l);\n}\necho \"===B===\\n\";\n$o = new SplFileObject(__DIR__ . '/fileobject_001b.txt');\n$o->setFlags(SplFileObject::DROP_NEW_LINE);\nforeach($o as $n => $l)\n{\n    var_dump($n, $l);\n}\n?>")).toMatchSnapshot();
  });
});
