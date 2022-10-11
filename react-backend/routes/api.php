<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AddCartController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('/users',function(){
//  $users=User::get();
//  return response()->json($users);
// });
// Route::get("/data",[ProductController::class,'index']);
// Route::get("/slug",[ProductController::class,'show']);
Route::resource('data', ProductController::class);
Route::resource("register",RegisterController::class);
Route::post("/login",[LoginController::class,'store']);
Route::resource('order', OrderController::class);
Route::resource('addcart', AddCartController::class);