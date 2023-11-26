<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppliedJob extends Model
{
    use HasFactory;
    protected $fillable = ['status', 'job_id', 'applicant_id'];
    public function createjobs()
    {
        return $this->belongsTo(CreateJob::class, 'job_id', 'id');
    }
    public function applicant()
    {
        return $this->belongsTo(Applicants::class, 'applicant_id', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'applicant_id');
    }
  
}
