// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/assert.phpt
  it("Calling assert with named params", function () {
    expect(parser.parseCode("<?php\nassert(assertion: true);\ntry {\n    assert(assertion: false);\n} catch (AssertionError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nassert(assertion: true, description: \"Description\");\ntry {\n    assert(assertion: false, description: \"Description\");\n} catch (AssertionError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    assert(description: \"Description\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
