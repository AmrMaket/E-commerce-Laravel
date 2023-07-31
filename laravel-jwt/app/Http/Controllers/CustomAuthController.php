<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomAuthController extends Controller
{   

    public function showSignupForm()
    {
        return view('signup');
    }
    
    public function signup(Request $request)
    {
        // Validation for the form fields
        $request->validate([
            'name' => 'required',
            'last_name' => 'required',
            'username' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'terms' => 'accepted',
        ]);

        $user = User::create([
            'name' => $request->name,
            'last_name' => $request->last_name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);    

        Auth::login($user);

        return redirect('/login.html');
    }
    public function showLoginForm()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        // Validation for the login form fields
        $request->validate([
            'username' => 'required|username',
            'password' => 'required',
        ]);
    }
    
}
