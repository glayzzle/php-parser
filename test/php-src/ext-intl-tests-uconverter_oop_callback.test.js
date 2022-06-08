// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_oop_callback.phpt
  it("UConverter::convert() w/ Callback Reasons", function () {
    expect(parser.parseCode("<?php\nclass MyConverter extends UConverter {\n  /**\n   * Called during conversion from source encoding to internal UChar representation\n   */\n  public function toUCallback($reason, $source, $codeUnits, &$error): string|int|array|null {\n    echo \"toUCallback(\", UConverter::reasonText($reason), \", ...)\\n\";\n    return parent::toUCallback($reason, $source, $codeUnits, $error);\n  }\n  /**\n   * Called during conversion from internal UChar to destination encoding\n   */\n  public function fromUCallback($reason, $source, $codePoint, &$error): string|int|array|null {\n    echo \"fromUCallback(\", UConverter::reasonText($reason), \", ...)\\n\";\n    return parent::fromUCallback($reason, $source, $codePoint, $error);\n  }\n}\n$c = new MyConverter('ascii', 'utf-8');\nforeach(array(\"regular\", \"irregul\\xC1\\xA1r\", \"\\xC2\\xA1unsupported!\") as $word) {\n  $c->convert($word);\n}\n?>")).toMatchSnapshot();
  });
});
