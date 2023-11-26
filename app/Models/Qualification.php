<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Qualification extends Model
{
    use HasFactory;

    protected $fillable = ['qualification_id', 'description']; // Define the fillable columns

   



    // Define the relationship with the 'create_jobs' table
    public function createjob()
    {
        return $this->belongsTo(Createjob::class, 'qualification_id', 'id');
    }
}