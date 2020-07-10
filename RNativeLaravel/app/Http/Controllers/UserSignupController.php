<?php

namespace App\Http\Controllers;

use App\UserSignup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserSignupController extends Controller
{
    public function insert(Request $request){
        $first_name = $request->input('first_name');
        $last_name = $request->input('last_name');
        $code = $request->input('code');
        $phone = $request->input('phone');
        $password=$request->input('password');
        $confirm_password=$request->input('confirm_password');
        $data=array('first_name'=>$first_name,"last_name"=>$last_name,"code"=>$code,"phone"=>$phone,"password"=>$password,"confirm_password"=>$confirm_password);
        $insert=DB::table('user_signups')->insert($data);
        return response()->json("Successfully Registered");


    }
    public function login(Request $request){

        $phone=$request->input('phone');
        $password=$request->input('password');
        $users = DB::table('users')->where('phone', $phone)->first();
        if($users < 0)
        {
            return response()->json("Sorry...Login Failed");
        }
        else{
            return response()->json("Login Sucess");



        }



    }
}
