<?php

namespace App\Http\Controllers;

use App\Models\Post;


use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return response()->json($posts, 200);
    }

    public function getPost($id)
    {
        $post = Post::find($id);

        return response()->json($post, 200);
    }

    public function createPost()
    {
        $post = new Post();

        $post->title = request('title');
        $post->content = request('content');
        $post->user_id = request('user_id');

        $post->save();

        return response()->json($post, 201);
    }

    public function updatePost($id)
    {
        $post = Post::find($id);

        $post->title = request('title');
        $post->content = request('content');
        $post->user_id = request('user_id');

        $post->save();

        return response()->json($post, 200);
    }

    public function destroyPost($id)
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json($post, 200);
    }
}
