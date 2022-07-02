// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_during_include_stat.phpt
  it("Make sure exceptions during include/require stating are properly propagated", function () {
    expect(parser.parseCode("<?php\nclass StreamWrapper {\n    public function url_stat($path, $flags) {\n        throw new Exception('stat failed');\n    }\n}\nstream_wrapper_register('test', StreamWrapper::class);\nset_include_path('test://foo:test://bar');\ntry {\n    require_once 'doesnt_exist.php';\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    require 'doesnt_exist.php';\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    include_once 'doesnt_exist.php';\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    include 'doesnt_exist.php';\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
