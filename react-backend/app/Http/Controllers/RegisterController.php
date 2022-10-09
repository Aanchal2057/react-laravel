<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    
    public function index()
    {
        return view('register');
    }

    public function store(Request $request)
    {
    
        $attributes = User::create(['name' => $request['name'], 'email' => $request['email'], 'password' => bcrypt($request['password']),'address' => $request['address'], 'phoneno' => $request['phoneno'], ]);


        auth()->login($attributes);

        return redirect('/');
    }
}
