<?php

use App\Http\Controllers\AdminDashBoardController;

use App\Http\Controllers\UploadImageController;
use App\Http\Controllers\ApplyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SampleAppController;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\AppliedJobController;
use App\Http\Controllers\EmployerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CreatejobController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JoblistingController;
use App\Http\Controllers\QualificationController;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/old', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('applicant'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashboard', [DashboardController::class, 'index'])
//     ->middleware(['auth', 'verified'])
//     ->name('dashboard');
Route::put('/dashboard/{id}', [DashboardController::class, 'update'])
    ->name('dashboard.update');
Route::get('/dashboard', [CreatejobController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');;
// Route::get('/dashboard', [ApplicantController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile/update-image', [ProfileController::class, 'updateImage'])->name('profile.updateImage');
});



Route::resource('createjob', CreatejobController::class)
    ->only('store', 'index', 'update')
    ->middleware(['auth', 'verified']);
Route::put('createjob/{id}', [CreatejobController::class, 'update'])->name('createjob.update');

// Appy routes 
// Route::get('/apply', [ApplyController::class, 'apply'])->name('apply');
Route::resource('appliedJobs', AppliedJobController::class)
    ->only(['index', 'store']);
Route::get('/jobinfo/{id}', [HomeController::class, 'jobinfo'])->middleware('auth');
Route::post('/jobinfo/appliedJobs', [AppliedJobController::class, 'store']);
// ->middleware('auth');


// Saple routes
Route::get('/sample', [SampleAppController::class, 'applicant'])->name('sample');
Route::post('/qualifications', [QualificationController::class, 'store']);
Route::resource('applicants', ApplicantController::class)
    ->only('store', 'index')
    ->middleware('auth');
// PUT YOUR ROUTES HERE

Route::get('/', [HomeController::class, 'index']);

Route::get('/admin', [AdminDashBoardController::class, 'admin'])->name('admin')->middleware('auth');
Route::get('/applicant', [ApplicantController::class, 'applicant'])->name('applicant');
Route::get('/applicant/application', [ApplicantController::class, 'applications'])->name('applicant.application');
Route::get('/applicant/career', [ApplicantController::class, 'career'])->name('career');



require __DIR__ . '/auth.php';
