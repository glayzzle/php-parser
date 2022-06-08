// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_oop_callback_return.phpt
  it("UConverter::convert() w/ Callback Return Values", function () {
    expect(parser.parseCode("<?php\nclass MyConverter extends UConverter {\n  public function toUCallback($reason, $source, $codeUnits, &$error): string|int|array|null {\n    $error = U_ZERO_ERROR;\n    switch ($codeUnits) {\n      case \"\\x80\": return NULL;\n      case \"\\x81\": return 'a';\n      case \"\\x82\": return ord('b');\n      case \"\\x83\": return array('c');\n    }\n    return null;\n  }\n  /**\n   * Called during conversion from internal UChar to destination encoding\n   */\n  public function fromUCallback($reason, $source, $codePoint, &$error): string|int|array|null {\n    $error = U_ZERO_ERROR;\n    switch ($codePoint) {\n      case 0x00F1: return \"A\";\n      case 0x00F2: return ord(\"B\");\n      case 0x00F3: return array(\"C\");\n      case 0x00F4: return NULL;\n    }\n    return null;\n  }\n}\n$c = new MyConverter('ascii', 'utf-8');\n// This line will trigger toUCallback\nvar_dump($c->convert(\"\\x80\\x81\\x82\\x83\"));\n// This line will trigger fromUCallback\nvar_dump($c->convert(\"\\xC3\\xB1\\xC3\\xB2\\xC3\\xB3\\xC3\\xB4\"));\n?>")).toMatchSnapshot();
  });
});
