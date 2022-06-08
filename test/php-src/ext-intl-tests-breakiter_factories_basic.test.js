// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter_factories_basic.phpt
  it("IntlBreakIterator factories: basic tests", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"ja\");\n$m = array('createWordInstance', 'createLineInstance', 'createCharacterInstance',\n    'createSentenceInstance', 'createTitleInstance');\n$t = 'Frase 1... Frase 2';\nforeach ($m as $method) {\n    echo \"===== $method =====\\n\";\n    $o1 = IntlBreakIterator::$method('ja');\n    $o2 = IntlBreakIterator::$method(NULL);\n    $o3 = IntlBreakIterator::$method();\n    var_dump($o1 == $o2 && $o2 == $o3);\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
