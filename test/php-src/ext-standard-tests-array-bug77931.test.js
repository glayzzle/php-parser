// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug77931.phpt
  it("Bug #77931: Warning for array_map mentions wrong type", function () {
    expect(parser.parseCode("<?php\ntry {\n    array_map('trim', array(), 1);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    array_map('trim', array(), array(), true);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    array_map('trim', array(), array(), array(), null);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
