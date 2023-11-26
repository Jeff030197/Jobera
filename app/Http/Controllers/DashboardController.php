<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log; 

use App\Models\CreateJob;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $userId = Auth::id();
        $works = CreateJob::all();
        
        return Inertia::render('Dashboard', [
            'userId' => $userId,
            'works' => $works
        ]);
    }

    public function update(Request $request, $id)
{
    $validated = $request->validate([
        'job_name' => 'required|string|max:255',
        'vacancy' => 'required|string|max:255',
        'location' => 'required|string|max:255',
        'job_description' => 'required|string',
        'work_schedule' => 'required|string|max:255',
        'type_of_work' => 'required|string|max:255',
        'hours_per_week' => 'required|string|max:255',
        'salary' => 'required|string|max:255'
    ]);

    Log::info('Request Data:', $request->all());

    // Find the job by its ID
    $createJob = CreateJob::findOrFail($id);

    // Update the job with the validated data
    $createJob->fill($validated);
    $createJob->save();

   
    return redirect(route('dashboard'));


}
}
 // Redirect back to the dashboard with the updated job ID
    // return response()->json(['data' => 'successful']);