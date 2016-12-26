<?php

  /**
   * Copyright (C) 2016 Glayzzle (BSD3 License)
   * @authors https://github.com/glayzzle/php-parser/graphs/contributors
   * @url http://glayzzle.com
   */
  ini_set('memory_limit', '1024M');
  $start = microtime(true);
  if (is_file($argv[1])) {
    $ast = ast\parse_file($argv[1], 40);
  } else {
    $ast = ast\parse_code($argv[1], 40);
  }
  // serialize nodes to associative arrays
  function getNode($node) {
    if (!$node) return false;
    if (is_array($node)) {
      $result = array();
      foreach($node as $item) $result[] = getNode($item);
      return $result;
    }
    if (!is_object($node)) {
      return $node;
    }
    $result = array(
      'kind' => ast\get_kind_name($node->kind),
      'lineno' => $node->lineno
    );
    if ($node->flags > 0) {
      $result['flags'] = ast\kind_uses_flags($node->flags);
    }
    if ($node instanceof ast\Node\Decl) {
      $result['endLineno'] = $node->endLineno;
      $result['name'] = $node->name;
      $result['docComment'] = getNode($node->docComment);
    }
    if ($node->children) {
      $result['children'] = getNode($node->children);
    }
    return $result;
  }

  echo json_encode( getNode($ast) );
