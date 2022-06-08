// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/callbacks_002.phpt
  it("call_user_func(): Wrong parameters", function () {
    expect(parser.parseCode("<?php\ntry {\n    call_user_func(array('Foo', 'bar'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    call_user_func(array(NULL, 'bar'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    call_user_func(array('stdclass', NULL));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
