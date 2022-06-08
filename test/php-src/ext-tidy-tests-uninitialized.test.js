// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/uninitialized.phpt
  it("Operations on uninitialized tidy object", function () {
    expect(parser.parseCode("<?php\n$tidy = new tidy;\ntry {\n    var_dump($tidy->getHtmlVer());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($tidy->isXhtml());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($tidy->isXml());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
