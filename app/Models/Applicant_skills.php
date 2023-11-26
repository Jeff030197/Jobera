<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant_skills extends Model
{
    use HasFactory;
    protected $fillable = [
        'applicant_id',
        'description',
    ];
}
