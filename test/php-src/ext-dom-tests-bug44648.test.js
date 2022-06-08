// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug44648.phpt
  it("Bug #44648 (Attribute names not checked for well formedness)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->loadXML('<root/>');\n$root = $doc->documentElement;\ntry {\n  $attr = new DOMAttr('@acb', '123');\n  $root->setAttributeNode($attr);\n} catch (DOMException $e) {\n  echo $e->getMessage().\"\\n\";\n}\ntry {\n  $root->setAttribute('@def', '456');\n} catch (DOMException $e) {\n  echo $e->getMessage().\"\\n\";\n}\ntry {\n  $root->setAttributeNS(NULL, '@ghi', '789');\n} catch (DOMException $e) {\n  echo $e->getMessage().\"\\n\";\n}\ntry {\n  $root->setAttributeNS('urn::test', 'a:g@hi', '789');\n} catch (DOMException $e) {\n  echo $e->getMessage().\"\\n\";\n}\necho $doc->saveXML($root);\n?>")).toMatchSnapshot();
  });
});
