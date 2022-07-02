// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/undef_index_to_exception.phpt
  it("Converting undefined index/offset notice to exception", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $msg) {\n    throw new Exception($msg);\n});\n$test = [];\ntry {\n    $test[0] .= \"xyz\";\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test);\ntry {\n    $test[\"key\"] .= \"xyz\";\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test);\nunset($test);\ntry {\n    $GLOBALS[\"test\"] .= \"xyz\";\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($test);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
