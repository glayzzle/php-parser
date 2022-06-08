// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/toString_exceptions.phpt
  it("Handling of exceptions during __toString", function () {
    expect(parser.parseCode("<?php\nclass BadStr {\n    public function __toString() {\n        throw new Exception(\"Exception\");\n    }\n}\n$badStr = new BadStr;\n$doc = new DOMDocument();\n$doc->loadXML(\n    '<root xmlns:ns=\"foo\"><node attr=\"foo\" /><node>Text</node><ns:node/><?pi foobar?></root>');\ntry { $doc->encoding = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\ntry { $doc->version = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\ntry { $doc->documentURI = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\n$root = $doc->childNodes[0];\n$node = $root->childNodes[0];\n$attrs = $node->attributes;\n$attr = $attrs[0];\ntry { $attr->value = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\ntry { $attr->nodeValue = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\n$node2 = $root->childNodes[1];\ntry { $node2->nodeValue = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\ntry { $node2->textContent = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\n$data = $node2->childNodes[0];\ntry { $data->data = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\n$node3 = $root->childNodes[2];\ntry { $node3->prefix = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\n$pi = $root->childNodes[3];\ntry { $pi->data = $badStr; } catch (Exception $e) { echo \"Exception\\n\"; }\necho $doc->saveXML();\n?>")).toMatchSnapshot();
  });
});
