// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_create_from_rule_basic.phpt
  it("Transliterator::createFromRules (basic)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$rules = <<<RULES\nα <> y;\n\\`\\` } a > “;\nRULES;\n$t = Transliterator::createFromRules($rules);\necho $t->id,\"\\n\";\necho $t->transliterate(\"``akk ``bkk ``aooy\"),\"\\n\";\n$u = transliterator_create_from_rules($rules, Transliterator::REVERSE);\necho $u->transliterate(\"``akk ``bkk ``aooy\"), \"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
