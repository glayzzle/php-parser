// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_009.phpt
  it("Live range & free on return", function () {
    expect(parser.parseCode("<?php\nclass bar {\n        public $foo = 1;\n        public $bar = 1;\n        function __destruct() {\n                throw $this->foo;\n        }\n}\nforeach (new bar as &$foo) {\n        try {\n                $foo = new Exception;\n                return; // frees the loop variable\n        } catch (Exception $e) {\n                echo \"exception\\n\";\n        }\n}\necho \"end\\n\";\n?>")).toMatchSnapshot();
  });
});
