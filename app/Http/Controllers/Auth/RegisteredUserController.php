<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    public function index(){
        return User::all();
    }
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function employerRegister(): Response
    {
        return Inertia::render('Auth/EmployerRegister');
    }
    public function register(): Response
    {
        return Inertia::render('Register/RegisterPage');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */

     public function store(Request $request): RedirectResponse
     {
         $request->validate([
             'name' => 'required|string|max:255',
             'email' => 'required|string|email|max:255|unique:users,email', 
             'password' => ['required', 'confirmed', Rules\Password::defaults()],
             'user_type' => 'required|string',
             'users_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
         ]);
     
         $users_image = null; // Initialize the variable
     
         // Handle user image upload
        //  if ($request->hasFile('users_image')) {
        //      $imgPath = $request->file('users_image')->store('public/images');
        //      $users_image = str_replace('public/', 'storage/', $imgPath);
        //  }

         // Create the user record
        $user = User::create([
        'name' => $request->input('name'),
        'email' => $request->input('email'),
        'password' => bcrypt($request->input('password')), // Hash the password before storing
        'user_type' => $request->input('user_type'),
        'users_image' => $users_image // Save the image path in the database
    ]);

    return redirect()->route('login')->with('success', 'Registration successful. You can now log in.');
}
}