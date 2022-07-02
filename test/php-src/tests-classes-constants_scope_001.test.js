// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_scope_001.phpt
  it("ZE2 class constants and scope", function () {
    expect(parser.parseCode("<?php\nclass ErrorCodes {\n    const FATAL = \"Fatal error\\n\";\n    const WARNING = \"Warning\\n\";\n    const INFO = \"Informational message\\n\";\n    static function print_fatal_error_codes() {\n        echo \"self::FATAL = \" . self::FATAL;\n    }\n}\nclass ErrorCodesDerived extends ErrorCodes {\n    const FATAL = \"Worst error\\n\";\n    static function print_fatal_error_codes() {\n        echo \"self::FATAL = \" . self::FATAL;\n        echo \"parent::FATAL = \" . parent::FATAL;\n    }\n}\n/* Call the static function and move into the ErrorCodes scope */\nErrorCodes::print_fatal_error_codes();\nErrorCodesDerived::print_fatal_error_codes();\n?>")).toMatchSnapshot();
  });
});
