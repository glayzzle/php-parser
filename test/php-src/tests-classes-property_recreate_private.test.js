// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/property_recreate_private.phpt
  it("Unsetting and recreating private properties.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    private $p = 'test';\n    function unsetPrivate() {\n        unset($this->p);\n    }\n    function setPrivate() {\n        $this->p = 'changed';\n    }\n}\nclass D extends C {\n    function setP() {\n        $this->p = 'changed in D';\n    }\n}\necho \"Unset and recreate a superclass's private property:\\n\";\n$d = new D;\n$d->unsetPrivate();\n$d->setPrivate();\nvar_dump($d);\necho \"\\nUnset superclass's private property, and recreate it as public in subclass:\\n\";\n$d = new D;\n$d->unsetPrivate();\n$d->setP();\nvar_dump($d);\necho \"\\nUnset superclass's private property, and recreate it as public at global scope:\\n\";\n$d = new D;\n$d->unsetPrivate();\n$d->p = 'this will create a public property';\nvar_dump($d);\necho \"\\n\\nUnset and recreate a private property:\\n\";\n$c = new C;\n$c->unsetPrivate();\n$c->setPrivate();\nvar_dump($c);\necho \"\\nUnset a private property, and attempt to recreate at global scope (expecting failure):\\n\";\n$c = new C;\n$c->unsetPrivate();\n$c->p = 'this will fail';\nvar_dump($c);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
