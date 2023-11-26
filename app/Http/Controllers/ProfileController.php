<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;




class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
{
    $user = $request->user();

   
    // Update other profile information
    $user->fill($request->validated());

    // If email is updated, reset email verification status
    if ($user->isDirty('email')) {
        $user->email_verified_at = null;
    }

    // Save the user model
    $user->save();

    // Redirect back to the profile edit page with a success message
    return redirect()->route('profile.edit')->with('success', 'Profile updated successfully!');
}
public function updateImage(Request $request): RedirectResponse
{
    $request->validate([
        'users_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
    ]);

    // Handle user image upload
    if ($request->hasFile('users_image')) {
        $user = $request->user();

        // Delete the old image if it exists
        if ($user->users_image) {
            Storage::delete(str_replace('storage/', 'public/', $user->users_image));
        }

        // Store the new image
        $imgPath = $request->file('users_image')->store('public/images');
        $users_image = str_replace('public/', 'storage/', $imgPath);

        // Update the user's image path in the database
        $user->update([
            'users_image' => $users_image
        ]);
    }

    return redirect()->back()->with('success', 'Profile picture updated successfully.');
}


    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
