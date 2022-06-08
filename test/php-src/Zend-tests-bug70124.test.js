// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70124.phpt
  it("Bug #70124 (null ptr deref / seg fault in ZEND_HANDLE_EXCEPTION_SPEC_HANDLER)", function () {
    expect(parser.parseCode("<?php\ntry  {\n    echo base_convert([array_search(chr(48),chr(48),chr(48),chr(48),chr(48),$f(\"test\"))],chr(48));\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\nclass A {\n}\ntry  {\n    echo base_convert([array_search(chr(48),chr(48),chr(48),chr(48),chr(48),a::y(\"test\"))],chr(48));\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\n$a = new A;\ntry  {\n    echo base_convert([array_search(chr(48),chr(48),chr(48),chr(48),chr(48),$a->y(\"test\"))],chr(48));\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry  {\n    echo base_convert([array_search(chr(48),chr(48),chr(48),chr(48),chr(48),\\bar\\y(\"test\"))],chr(48));\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry  {\n    echo base_convert([array_search(chr(48),chr(48),chr(48),chr(48),chr(48),y(\"test\"))],chr(48));\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
