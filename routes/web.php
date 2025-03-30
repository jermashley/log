<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/Index');
})->name('home');

Route::get('/musica', function () {
    return Inertia::render('musica/Index');
})->name('musica.index');

Route::get('/resume', function () {
    return Inertia::render('resume/Index');
})->name('resume.index');
