<?php

namespace App\Http\Controllers;


use App\Models\createjob;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class EmployerController extends Controller
{
    public function employer()
    {
        return Inertia::render('EmployerProfile/EmployerProfile');
    }

    public function joblist()
    {

        $userId = Auth::id();
        $jobs = CreateJob::where('user_id', $userId)->get();
        
        return Inertia::render('EmployerProfile/CreateJob', [
            'jobs' => $jobs
        ]);
    }

    public function management()
    {
        return Inertia::render('EmployerProfile/ApplicationManagement');
    }
}
