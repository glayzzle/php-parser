// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74084.phpt
  it("Bug #74084 (Out of bound read - zend_mm_alloc_small)", function () {
    expect(parser.parseCode("<?php\n$$A += $$B['a'] = &$$C;\nunset($$A);\ntry {\n    $$A -= $$B['a'] = &$$C;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunset($$A);\ntry {\n    $$A *= $$B['a'] = &$$C;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunset($$A);\ntry {\n    $$A /= $$B['a'] = &$$C;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nunset($$A);\ntry {\n    $$A **= $$B['a'] = &$$C;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
