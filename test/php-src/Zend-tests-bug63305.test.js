// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63305.phpt
  it("Bug #63305 (zend_mm_heap corrupted with traits)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    switch ($class) {\n    case \"Attachment\":\n        eval(<<<'PHP'\nclass Attachment extends File {\n}\nPHP\n    );\n        break;\n    case \"File\":\n        eval(<<<'PHP'\nclass File {\n    use TDatabaseObject {\n        TDatabaseObject::__construct as private databaseObjectConstruct;\n    }\n    public function __construct() {\n    }\n}\nPHP\n    );\n        break;\n    case \"TDatabaseObject\":\n        eval(<<<'PHP'\ntrait TDatabaseObject {\n    public function __construct() {\n    }\n}\nPHP\n    );\n        break;\n    }\n    return TRUE;\n});\nnew Attachment(\"\");\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
