<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicantManagement extends Controller
{
    public function ApplicantManagement() {
        return Inertia::render('EmployerProfile/ApplicationManagement');
    }
}
