<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('applied_jobs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('applicant_id');
            $table->unsignedBigInteger('job_id');
            $table->enum('status', ['processing', 'for-Interview', 'hired'])->default('processing');
            $table->foreign('applicant_id')->references('id')->on('applicants')->cascadeOnDelete();
            $table->foreign('job_id')->references('id')->on('createjobs')->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('Applied_Jobs');
    }
};
