// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46241.phpt
  it("Bug #46241 (error handler stacks)", function () {
    expect(parser.parseCode("<?php\nclass ErrorHandling\n{\n    public function errorHandler1( $errno, $errstr )\n    {\n        echo \"Caught on first level: '$errstr'\\n\";\n        return true;\n    }\n    public function errorHandler2( $errno, $errstr )\n    {\n        echo \"Caught on second level: '$errstr'\\n\";\n        return true;\n    }\n}\n$err = new ErrorHandling();\nset_error_handler( array( $err, 'errorHandler1' ) );\nset_error_handler( array( $err, 'errorHandler2' ) );\ntrigger_error( 'Foo', E_USER_WARNING );\nfunction errorHandler1( $errno, $errstr )\n{\n    echo \"Caught on first level: '$errstr'\\n\";\n    return true;\n}\nfunction errorHandler2( $errno, $errstr )\n{\n    echo \"Caught on second level: '$errstr'\\n\";\n    return true;\n}\nset_error_handler( 'errorHandler1' );\nset_error_handler( 'errorHandler2' );\ntrigger_error( 'Foo', E_USER_WARNING );\n?>\n==END==")).toMatchSnapshot();
  });
});
