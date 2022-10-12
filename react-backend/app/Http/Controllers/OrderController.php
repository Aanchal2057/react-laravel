<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class OrderController extends Controller
{
  

    public function submit(Request $request)
    {
        $order = Order::create([
            'user_id' => $request->id,
            'name' => $request->name,
            'phoneno' => $request->phoneno,
            'email' => $request->email,
            'address' => $request->address,
            'total' => $request->total,
        ]);
    //  dd($request->orderItems);
    // $orderItems = array();
       
        die($request->orderItems);
        // if(is_array($orderItems)||is_object($orderItems)){
            foreach ($orderItems as $cart) {
                OrderProduct::create([
                    'order_id' => $order->id,
                    'product_id' => $cart['id'],
                    'quantity' => $cart['quantity'],
                    'price'=> $cart['price'],
                ]);
                return ['success'=> 'success'];
               
        //    }

        }
        
      

    }
   
    
    
}
