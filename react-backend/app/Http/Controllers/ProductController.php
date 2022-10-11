<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    public function index(){
        $products=Product::get();
         return $products;
    }
    public function view(Request $request){
        $search=$request['search']??"";
        if($search!=""){
            $products=Product::where('name','like','%' . request('search') . '%')
                    ->orWhere('category','like','%'. request('search') . '%')->get();
        }else{
            $products=Product::paginate(6);
        }
        $data=compact('products','search');
        return response()->with($data);
    } 
    public function show($slug){
         return Product::where('slug', $slug)->firstOrFail();
        // return Product::find($id);

    }
   
}
