// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug28817.phpt
  it("Bug #28817 (properties in extended class)", function () {
    expect(parser.parseCode("<?php\nclass z extends domDocument{\n    /** variable can have name */\n    public $p_array;\n    public $p_variable;\n    function __construct(){\n        $this->p_array[] = 'bonus';\n        $this->p_array[] = 'vir';\n        $this->p_array[] = 'semper';\n        $this->p_array[] = 'tiro';\n        $this->p_variable = 'Cessante causa cessat effectus';\n    }\n}\n$z=new z();\nvar_dump($z->p_array);\nvar_dump($z->p_variable);\n?>")).toMatchSnapshot();
  });
});
