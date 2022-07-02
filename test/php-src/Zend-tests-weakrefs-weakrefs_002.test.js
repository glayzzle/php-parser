// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakrefs_002.phpt
  it("WeakReference serials", function () {
    expect(parser.parseCode("<?php\n$wr = WeakReference::create(new stdClass);\ntry {\n    serialize($wr);\n} catch (Exception $ex) {\n    var_dump($ex->getMessage());\n}\n$wrs = 'O:13:\"WeakReference\":0:{}';\ntry {\n\tvar_dump(unserialize($wrs));\n} catch (Exception $ex) {\n    var_dump($ex->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
