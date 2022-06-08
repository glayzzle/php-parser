// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_create_from_rule_error.phpt
  it("Transliterator::createFromRules (error)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$t = Transliterator::createFromRules(\"\\x8Fss\");\necho intl_get_error_message(),\"\\n\";\n$rules = <<<RULES\n\\`\\` } a > “;\n\\`\\` } a > b;\nRULES;\n$t = Transliterator::createFromRules($rules);\necho intl_get_error_message(),\"\\n\";\n$rules = <<<RULES\nffff\nRULES;\n$t = Transliterator::createFromRules($rules);\necho intl_get_error_message(),\"\\n\";\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
