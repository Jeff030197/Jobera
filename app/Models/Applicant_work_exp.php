<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant_work_exp extends Model
{
    use HasFactory;
    protected $fillable = [
        'applicant_id',
        'position',
        'started',
        'ended',
    ];
}
