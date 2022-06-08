// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70895.phpt
  it("Bug #70895 null ptr deref and segfault with crafted callable", function () {
    expect(parser.parseCode("<?php\ntry {\n    array_map(\"%n\", 0);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    array_map(\"%n %i\", 0);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    array_map(\"%n %i aoeu %f aoeu %p\", 0);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
