// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_errors.phpt
  it("Trying to acquire callable to something that's not callable", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private static function privateMethod() {}\n    public function instanceMethod() {}\n}\ntry {\n    $fn = 123;\n    $fn(...);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    does_not_exist(...);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    stdClass::doesNotExist(...);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    (new stdClass)->doesNotExist(...);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    [new stdClass, 'doesNotExist'](...);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    Test::privateMethod(...);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    Test::instanceMethod(...);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
