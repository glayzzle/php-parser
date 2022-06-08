// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_error_04.phpt
  it("Observer: fatal errors caught with zend_try will not fire end handlers prematurely", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    // ext/soap catches a zend_bailout and then throws an exception\n    $client = new SoapClient('foo');\n}\nfunction main()\n{\n    foo();\n}\n// try/catch is on main() to ensure ZEND_HANDLE_EXCEPTION does not fire the end handlers again\ntry {\n    main();\n} catch (SoapFault $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\necho 'Done.' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
