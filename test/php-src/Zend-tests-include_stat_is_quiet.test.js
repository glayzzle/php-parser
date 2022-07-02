// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/include_stat_is_quiet.phpt
  it("Stats executed during include path resolution should be silent", function () {
    expect(parser.parseCode("<?php\nclass StreamWrapper {\n    public function url_stat($path, $flags) {\n        $path = str_replace('test://', 'file://', $path);\n        if ($flags & STREAM_URL_STAT_QUIET) {\n            return @stat($path);\n        } else {\n            return stat($path);\n        }\n    }\n}\nstream_wrapper_register('test', StreamWrapper::class);\nset_include_path('test://foo:test://bar');\ntry {\n    require_once 'doesnt_exist.php';\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
