// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakrefs_003.phpt
  it("WeakReference object handlers", function () {
    expect(parser.parseCode("<?php\n$wr = WeakReference::create(new stdClass);\nvar_dump($wr->disallow);\nvar_dump(isset($wr->disallow));\nunset($wr->disallow);\ntry {\n    $wr->disallow = \"writes\";\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n}\ntry {\n    $disallow = &$wr->disallowed;\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
