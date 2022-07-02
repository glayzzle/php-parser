// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70898.phpt
  it("Bug #70895 null ptr deref and segfault with crafted callable", function () {
    expect(parser.parseCode("<?php\nfunction m($f,$a){\n    return array_map($f,0);\n}\ntry {\n    echo implode(m(\"\",m(\"\",m(\"\",m(\"\",m(\"0000000000000000000000000000000000\",(\"\")))))));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
