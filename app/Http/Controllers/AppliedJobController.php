<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Models\AppliedJob;
use App\Models\CreateJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;


class AppliedJobController extends Controller
{
    public function index(): Response
    {
        $userId = Auth::id();
        $appliedJobs = AppliedJob::where('applicant_id', $userId)->get();

        return Inertia::render('Dashboard', [
            'userId' => $userId,
            'appliedJobs' => $appliedJobs,
    ]);
    }


    public function store(Request $request)
{
    $validatedData = $request->validate([
        'status' => 'required|string',
        'job_id' => 'required|exists:createjobs,id', 
        'applicant_id' => 'required|exists:applicants,id',
    ]);

    $existingApplicant = AppliedJob::where('applicant_id', $validatedData['applicant_id'])
                                   ->where('job_id', $validatedData['job_id'])
                                   ->first();

    if ($existingApplicant) {
        return response()->json(['message' => 'You have already applied for this job!'], 400);
    }

    // Create a new entry for the applied job
    $appliedJob = new AppliedJob([
        'status' => $validatedData['status'],
        'job_id' => $validatedData['job_id'],
        'applicant_id' => $validatedData['applicant_id'],
    ]);

    $appliedJob->save();

    // Return a success response
    $message = 'Applied job Successfully! ';
    return response()->json(['message' => $message], 201);
}



    
      
  }

   


    


    



