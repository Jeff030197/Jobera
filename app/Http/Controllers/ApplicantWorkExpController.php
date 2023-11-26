<?php

namespace App\Http\Controllers;

use App\Models\Applicant_work_exp;
use Illuminate\Http\Request;

class ApplicantWorkExpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'applicant_id' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'started' => 'required|string|max:255',
            'ended' => 'required|string|email|max:255',
        ]);

        $existingApplicant = Applicant_work_exp::where('user_id', auth()->user()->id)->first();
        if ($existingApplicant) {
            return response()->json(['message' => 'You are already registered!'], 400);
        }

        $applicant = new Applicant_work_exp($validated);
        $applicant->user_id = auth()->user()->id;
        $applicant->save();

        return response()->json(['message' => 'Profile created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Applicant_work_exp $applicant_work_exp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Applicant_work_exp $applicant_work_exp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Applicant_work_exp $applicant_work_exp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Applicant_work_exp $applicant_work_exp)
    {
        //
    }
}
