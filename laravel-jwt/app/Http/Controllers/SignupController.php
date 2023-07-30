<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SignupController extends Controller
{
    public function signup(Request $request)
    {
        $userData = $request->all();

        $user = new User();
        $user->first_name = $userData['first_name'];
        $user->last_name = $userData['last_name'];
        $user->username = $userData['username'];
        $user->email = $userData['email'];
        $user->password = bcrypt($userData['password']);
        $user->save();

        // Return a response to the frontend
        return response()->json(['status' => 'success']);
    }
}
