// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/property_write_errors.phpt
  it("Test property write errors", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument();\ntry {\n    $dom->nodeValue = [];\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $dom->nodeType += 1;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $dom->xmlEncoding = null;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$entity = new DOMEntity();\ntry {\n    $entity->actualEncoding = null;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $entity->encoding = null;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $entity->version = null;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
