<?php

namespace App\Http\Controllers;

use App\Models\createjob;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JoblistingController extends Controller
{
    public function index () {

        $jobs = CreateJob::with('User')->latest()->get();
            
        return Inertia::render('Home/SampleApp', [
            'jobs' => $jobs]);
    }

    
}
