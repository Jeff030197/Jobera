<?php

namespace App\Http\Controllers;

use App\Models\Applicants;
use App\Models\createjob;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class HomeController extends Controller
{
    public function index()
    {

        $jobs = Createjob::with('qualifications', 'user')->get();


        return Inertia::render('Home/HomePage', [
            'jobs' => $jobs,

        ]);
    }

    public function jobinfo(string $id)
    {


        $apply = CreateJob::where("id", $id)->get();
        $user = Auth::id();
        $applicantId = Applicants::where('user_id', $user)->get();

        return Inertia::render('Apply/Apply', [
            'apply' => $apply,
            'id' => $applicantId
        ]);
    }
}

