<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicants extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'job_title',
        'email',
        'gender',
        'phone_number',
        'city_street',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function appliedJobs()
    {
        return $this->hasMany(AppliedJob::class, 'applicant_id', 'id');
    }
}
