// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_strictErrorChecking_variation.phpt
  it("DomDocument::$strictErrorChecking - ensure turning off actually works", function () {
    expect(parser.parseCode("<?php\necho \"Load document\\n\";\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\necho \"See if strictErrorChecking is on\\n\";\nvar_dump($doc->strictErrorChecking);\necho \"Should throw DOMException when strictErrorChecking is on\\n\";\ntry {\n    $attr = $doc->createAttribute(0);\n} catch (DOMException $e) {\n    echo \"GOOD. DOMException thrown\\n\";\n    echo $e->getMessage() .\"\\n\";\n} catch (Exception $e) {\n    echo \"OOPS. Other exception thrown\\n\";\n}\necho \"Turn strictErrorChecking off\\n\";\n$doc->strictErrorChecking = false;\necho \"See if strictErrorChecking is off\\n\";\nvar_dump($doc->strictErrorChecking);\necho \"Should raise PHP error because strictErrorChecking is off\\n\";\ntry {\n    $attr = $doc->createAttribute(0);\n} catch (DOMException $e) {\n    echo \"OOPS. DOMException thrown\\n\";\n    echo $e->getMessage() .\"\\n\";\n} catch (Exception $e) {\n    echo \"OOPS. Other exception thrown\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
