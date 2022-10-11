<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function store(Request $request){   
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)){
            return ["error"=> "Email and password are mismatched"];
        }

        return $user;

    }

    
}
