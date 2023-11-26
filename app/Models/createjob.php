<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class createjob extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_name',
        'vacancy',
        'job_description',
        'location',
        'work_schedule',
        'type_of_work',
        'hours_per_week',
        'salary'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function qualifications()
    {
        return $this->hasMany(Qualification::class, 'qualification_id', 'id');
    }
    public function appliedjobs()
    {
        return $this->hasMany(AppliedJob::class, 'job_id', 'id');
    }


}
