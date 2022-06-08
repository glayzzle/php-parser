// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/marks.phpt
  it("Test support for PCRE marks", function () {
    expect(parser.parseCode("<?php\n$regex = <<<'REGEX'\n/\n    _ (a) (*MARK:A_MARK) _\n  | _ (b) _\n  | _ (c) (*MARK:C_MARK) _\n  | _ (d) _\n/x\nREGEX;\nvar_dump(preg_match($regex, '_c_', $matches));\nvar_dump($matches);\nvar_dump(preg_match_all($regex, '_a__b__c__d_', $matches, PREG_PATTERN_ORDER));\nvar_dump($matches);\nvar_dump(preg_match_all($regex, '_a__b__c__d_', $matches, PREG_SET_ORDER));\nvar_dump($matches);\nvar_dump(preg_replace_callback($regex, function($matches) {\n    var_dump($matches);\n    return $matches[0];\n}, '_a__b__c__d_'));\n?>")).toMatchSnapshot();
  });
});
