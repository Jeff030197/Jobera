<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant_education extends Model
{
    use HasFactory;
    protected $fillable = [
        'applicant_id',
        'school_name',
        'course',
        'year_graduated',
        'year_started',
        'units',
        'awards',
    ];
}
