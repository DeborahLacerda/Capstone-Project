<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return UserResource::collection($users);
    }

    public function show(string $id)
    {
        $user = User::find($id);

        return new UserResource($user);
    }

    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'password' => $request->password,
            'email' => $request->email,
        ]);

        return new UserResource($user);
    }

    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        $user->update($request->only(['name', 'email']));

        return new UserResource($user);
    }

    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();

        return new UserResource($user);
    }
}
