<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentsResource;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Post $post)
    {
        return CommentsResource::collection($post->comments);
    }


    public function store(Request $request, Post $post)
    {
        $comment = Comment::create(
            [
                'user_id' => $request->user()->id,
                'post_id' => $post->id,
                'content' => $request->content
            ]
        );

        return new CommentsResource($comment);
    }

    public function update(Request $request, string $id)
    {
        $comment = Comment::find($id);

        if ($request->user()->id !== $comment->user_id) {
            return response()->json(['error' => 'You can only edit your own comments.'], 403);
        }

        $comment->update($request->only(['content']));

        return new CommentsResource($comment);
    }


    public function destroy(Request $request, string $id)
    {
        $comment = Comment::find($id);

        if ($request->user()->id !== $comment->user_id) {
            return response()->json(['error' => 'You can only remove your own comments.'], 403);
        }

        $comment = Comment::find($id);
        $comment->delete();

        return new CommentsResource($comment);
    }
}
