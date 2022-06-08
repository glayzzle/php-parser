// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/rbbiter_getBinaryRules_basic2.phpt
  it("IntlRuleBasedBreakIterator::getBinaryRules(): basic test icu >= 61.1 && icu < 68.1", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\n$rules = <<<RULES\n\\$LN = [[:letter:] [:number:]];\n\\$S = [.;,:];\n!!forward;\n\\$LN+ {1};\n\\$S+ {42};\n!!reverse;\n\\$LN+ {1};\n\\$S+ {42};\n!!safe_forward;\n!!safe_reverse;\nRULES;\n$rbbi = new IntlRuleBasedBreakIterator($rules);\n$rbbi->setText('sdfkjsdf88á.... ,;');\n$br = $rbbi->getBinaryRules();\n$rbbi2 = new IntlRuleBasedBreakIterator($br, true);\nvar_dump($rbbi->getRules(), $rbbi2->getRules());\nvar_dump($rbbi->getRules() == $rbbi2->getRules());\n?>")).toMatchSnapshot();
  });
});
