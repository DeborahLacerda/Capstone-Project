<?php

namespace App\Http\Controllers;

use App\Models\Comment;

use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::all();

        return response()->json($comments, 200);
    }

    public function getPost($id)
    {
        $comment = Comment::find($id);

        return response()->json($comment, 200);
    }

    public function createPost()
    {
        $comment = new Comment();

        $comment->content = request('content');
        $comment->user_id = request('user_id');
        $comment->user_id = request('post_id');

        $comment->save();

        return response()->json($comment, 201);
    }

    public function updatePost($id)
    {
        $comment = Comment::find($id);

        $comment->content = request('content');
        $comment->user_id = request('user_id');
        $comment->user_id = request('post_id');

        $comment->save();

        return response()->json($comment, 200);
    }

    public function destroyPost($id)
    {
        $comment = Comment::find($id);
        $comment->delete();

        return response()->json($comment, 200);
    }
}
