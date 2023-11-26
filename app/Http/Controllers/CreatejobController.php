<?php

namespace App\Http\Controllers;


use App\Models\createjob;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Applicants;
use App\Models\AppliedJob;


class CreatejobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $userId = Auth::id();
        $works = createjob::all();


        $appliedJobs = AppliedJob::whereHas('createJobs', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })->with('applicant', 'applicant.user', 'createJobs')->get();


        return Inertia::render('Dashboard', [
            'userId' => $userId,
            'works' => $works,
            'applied' => $appliedJobs,
            'applicants' => Applicants::where('user_id', $userId)->get()
        ]);
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
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'job_name' => 'required|string|max:255',
            'vacancy' => 'required|string|max:255',
            'job_description' => 'required|string',
            'work_schedule' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'type_of_work' => 'required|string|max:255',
            'hours_per_week' => 'required|string|max:255',
            'salary' => 'required|integer'
        ]);
        $request->user()->createjobs()->create($validated);

        return redirect(route('dashboard'));
    }



    /**
     * Update the specified resource in storage.
     * 
     */


    public function update(Request $request, string $id): RedirectResponse
    {
        $validated = $request->validate([
            'job_name' => 'required|string|max:255',
            'vacancy' => 'required|string|max:255',
            'job_description' => 'required|string|max:255',
            'work_schedule' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'type_of_work' => 'required|string|max:255',
            'hours_per_week' => 'required|string|max:255',
            'salary' => 'required|integer',
        ]);

        $createJob = CreateJob::findOrFail($id);

        $createJob->update($validated);
        return redirect()->route('createjob.index');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CreateJob $createJob)
    {
        // You can implement this method if needed
    }
}
