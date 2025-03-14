<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/Index');
});

Route::get('/musica', function () {
    return Inertia::render('musica/Index');
});
