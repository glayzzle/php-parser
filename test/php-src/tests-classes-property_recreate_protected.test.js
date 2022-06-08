// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/property_recreate_protected.phpt
  it("Unsetting and recreating protected properties.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    protected $p = 'test';\n    function unsetProtected() {\n        unset($this->p);\n    }\n    function setProtected() {\n        $this->p = 'changed';\n    }\n}\nclass D extends C {\n    function setP() {\n        $this->p = 'changed in D';\n    }\n}\n$d = new D;\necho \"Unset and recreate a protected property from property's declaring class scope:\\n\";\n$d->unsetProtected();\n$d->setProtected();\nvar_dump($d);\necho \"\\nUnset and recreate a protected property from subclass:\\n\";\n$d = new D;\n$d->unsetProtected();\n$d->setP();\nvar_dump($d);\necho \"\\nUnset a protected property, and attempt to recreate it outside of scope (expected failure):\\n\";\n$d->unsetProtected();\n$d->p = 'this will fail';\nvar_dump($d);\n?>")).toMatchSnapshot();
  });
});
