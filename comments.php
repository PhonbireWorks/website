<?php
$filename = 'comments.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $comment = htmlspecialchars($_POST['comment']);
    $newComment = "$name: $comment\n";

    file_put_contents($filename, $newComment, FILE_APPEND);
    echo json_encode(['name' => $name, 'comment' => $comment]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($filename)) {
        $comments = file($filename, FILE_IGNORE_NEW_LINES);
        $commentsArray = array_map(function($comment) {
            list($name, $commentText) = explode(': ', $comment, 2);
            return ['name' => $name, 'comment' => $commentText];
        }, $comments);
        echo json_encode($commentsArray);
    } else {
        echo json_encode([]);
    }
    exit;
}
?>
