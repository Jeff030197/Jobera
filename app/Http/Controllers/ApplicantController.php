<?php

namespace App\Http\Controllers;

use App\Models\Applicants;
use App\Models\AppliedJob;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Database\Eloquent\Factories\HasFactory;


class ApplicantController extends Controller
{
    use HasFactory;
    public function store(Request $request)
    {
        $validated = $request->validate([
            'job_title' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'city_street' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'gender' => 'required|string|max:255',
        ]);

        $existingApplicant = Applicants::where('user_id', auth()->user()->id)->first();
        if ($existingApplicant) {
            return response()->json(['message' => 'You are already registered!'], 400);
        }

        $applicant = new Applicants($validated);
        $applicant->user_id = auth()->user()->id;
        $applicant->save();

        return response()->json(['message' => 'Profile created successfully'], 201);
    }
    // // Create a new job for the authenticated user using the defined relationship
    // $request->user()->applicants()->create($validated);

    public function applicant()
    {
        return Inertia::render('Applicant/ApplicantPage');
    }

    public function applications()
    {
        return Inertia::render('Applicant/Applications');
    }



    public function career()
    {

        $applicant = Auth::user()->applicant;


        if ($applicant) {

            $appliedJobs = $applicant->appliedJobs()->with('createJobs',)->get();

            return Inertia::render('Applicant/Career', [
                "careers" => $appliedJobs,


            ]);
        }
    }
}
