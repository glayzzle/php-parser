// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/illegal_offset_unset_isset_empty.phpt
  it("Using unset(), isset(), empty() with an illegal array offset throws", function () {
    expect(parser.parseCode("<?php\n$ary = [];\ntry {\n    unset($ary[[]]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    isset($ary[[]]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    empty($ary[[]]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
