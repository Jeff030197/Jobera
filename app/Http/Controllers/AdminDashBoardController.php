<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\AppliedJob;
use App\Models\createJob;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashBoardController extends Controller
{
    public function admin () {
        $users = User::all();
        $applicants = User::where("user_type", "applicant")->get();
        $employer =  User::where("user_type", "employer")->get();
        $job_posted =   createJob::All();
        $applications = AppliedJob::with('applicant.user', 'createjobs')->get();
        return Inertia::render('Admin/AdminDashBoard', [
            'users' => $users,
            'applicants' => $applicants,
            'employer' => $employer,
            'job_posted' => $job_posted,
            'applications' =>   $applications
        ]);
    }

    
}
