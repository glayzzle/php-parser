// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80046.phpt
  it("Bug #80046: FREE for SWITCH_STRING optimized away", function () {
    expect(parser.parseCode("<?php\nfunction test($foo) {\n    switch ($foo . 'Bar') {\n        case 'A':\n            throw new Exception('A');\n        default:\n            throw new Exception('Default');\n    }\n}\ntry {\n    test('Foo');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
