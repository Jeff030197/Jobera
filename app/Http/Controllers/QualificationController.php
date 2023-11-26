<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;


use App\Models\createjob;
use App\Models\Qualification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QualificationController extends Controller
{
    // Other methods...
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'description' => 'required|string|max:255',
        'qualification_id' => 'required|exists:createjobs,id',
      
    ]);

    // Create a new Qualification instance
    $qualification = new Qualification([
        'description' => $validatedData['description'],
    ]);

    // Get the CreateJob instance based on the provided qualification_id
    $createJob = CreateJob::find($validatedData['qualification_id']);

    if (!$createJob) {
        return response()->json(['error' => 'CreateJob not found'], 404);
    }

    // Save the qualification to the createjobs relationship
    $createJob->qualifications()->save($qualification);

    return response()->json(['message' => 'Qualification created successfully'], 201);
}










    // Other methods...
}

