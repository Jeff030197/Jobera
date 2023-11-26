<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\createjob;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SampleAppController extends Controller
{
    public function applicant () {
        $userId = Auth::id();

        $works = createjob::all();
            
        return Inertia::render('Dashboard', [
            'userId' => $userId,
            'works' => $works
        ]);
    }

    
}
