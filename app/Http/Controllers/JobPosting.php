<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JobPosting extends Controller
{
    public function JobPosting() {
        return Inertia::render('EmployerProfile/CreateJob');
    }
}
