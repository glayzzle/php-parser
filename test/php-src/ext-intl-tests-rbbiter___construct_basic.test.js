// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/rbbiter___construct_basic.phpt
  it("IntlRuleBasedBreakIterator::__construct: basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.default_locale\", \"pt_PT\");\n$rules = <<<RULES\n\\$LN = [[:letter:] [:number:]];\n\\$S = [.;,:];\n!!forward;\n\\$LN+ {1};\n\\$S+ {42};\n!!reverse;\n\\$LN+ {1};\n\\$S+ {42};\n!!safe_forward;\n!!safe_reverse;\nRULES;\n$rbbi = new IntlRuleBasedBreakIterator($rules);\nvar_dump(get_class($rbbi));\ntry {\n    $obj = new IntlRuleBasedBreakIterator('[\\p{Letter}\\uFFFD]+;[:number:]+', 'aoeu');\n} catch (IntlException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
