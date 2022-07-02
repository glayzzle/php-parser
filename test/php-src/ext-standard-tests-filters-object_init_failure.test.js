// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/object_init_failure.phpt
  it("Creating the stream filter object may fail", function () {
    expect(parser.parseCode("<?php\nclass SampleFilter extends php_user_filter {\n    private $data = \\FOO;\n}\nstream_filter_register('sample.filter', SampleFilter::class);\ntry {\n    var_dump(file_get_contents('php://filter/read=sample.filter/resource='. __FILE__));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
