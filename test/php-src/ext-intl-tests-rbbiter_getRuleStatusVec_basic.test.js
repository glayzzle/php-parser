// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/rbbiter_getRuleStatusVec_basic.phpt
  it("IntlRuleBasedBreakIterator::getRuleStatusVec(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$rules = <<<RULES\n\\$LN = [[:letter:] [:number:]];\n\\$S = [.;,:];\n!!forward;\n\\$LN+ {1};\n[^.]+ {4};\n\\$S+ {42};\n!!reverse;\n\\$LN+ {1};\n[^.]+ {4};\n\\$S+ {42};\n!!safe_forward;\n!!safe_reverse;\nRULES;\n$rbbi = new IntlRuleBasedBreakIterator($rules);\n$rbbi->setText('sdfkjsdf88á.... ,;');\ndo {\n    var_dump($rbbi->current(), $rbbi->getRuleStatusVec());\n} while ($rbbi->next() != IntlBreakIterator::DONE);\n?>")).toMatchSnapshot();
  });
});
